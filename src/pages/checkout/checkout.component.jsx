import React from 'react';

import CheckOutTableFooter from '../../components/checkout-table-footer/checkout-table-footer.component';
import CheckOutTableBody from '../../components/checkout-table-body/checkout-table-body.component';
import {
  CheckoutPageContainer,
  CheckOutTable,
  TableHeader,
  TableRow,
  TableHead,
} from './checkout.styles';

const headers = ['product', 'description', 'quantity', 'price', 'remove'];

export const CheckOutPage = () => (
  <CheckoutPageContainer>
    <CheckOutTable>
      <TableHeader>
        <TableRow scope='row'>
          {headers.map(text => (
            <TableHead colSpan='1' key={text}>
              {text}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <CheckOutTableBody />
      <CheckOutTableFooter />
    </CheckOutTable>
  </CheckoutPageContainer>
);

export default CheckOutPage;
