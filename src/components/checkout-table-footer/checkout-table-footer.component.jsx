import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { selectCartTotal } from '../../redux/cart/cart.selectors';

import { StripeCheckoutButton } from '../index';
import {
  PayContainer,
  TotalContainer,
  WarningContainer,
} from './checkout-table-footer.styles';

const CheckOutTableFooter = () => {
  const total = useSelector(selectCartTotal);

  return (
    <tfoot>
      <tr>
        <td colSpan='5'>
          <PayContainer>
            <TotalContainer>
              <span>total ${total || '0'}</span>
            </TotalContainer>
            <WarningContainer>
              *Please use the following for test credit card payments*
              <br />
              VISA: <span>4242 4242 4242 4242</span>
              <br />
              MASTERCARD: <span>5555 5555 5555 4444</span>
              <br />
              Exp: Any Future Date, CVV: Any 3 Digits
            </WarningContainer>
            <StripeCheckoutButton price={total} />
          </PayContainer>
        </td>
      </tr>
    </tfoot>
  );
};

export default memo(CheckOutTableFooter);
