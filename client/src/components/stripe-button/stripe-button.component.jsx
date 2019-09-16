import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

/* cSpell: Disable */
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_Y8ZezDGRQ20LEe87XaHQJqXE00nniaQD75';

  const onToken = token => {
    // console.log(token);
    // alert('Payment Successful');
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then(response => {
        console.log('StripeCheckout Response: ', response);
        alert('Succsessful Payment');
      })
      .catch(error => {
        // console.log('Payment Error: ', JSON.parse(error));
        console.log('Payment Error: ', error);
        alert(
          'There was an issue with your payment! Make sure to use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
