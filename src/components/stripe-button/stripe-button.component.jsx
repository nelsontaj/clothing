import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 	
  'pk_test_51HNjEfHE38QHxAXXOpuT9Y9TAeAc5EKqrhYAHAuVkvw0Ml8T6F012ogHAZTGf5JarZ43q8iMK4p30wccc3i5wxT800q7vcpA7j';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful');
  }

  return (
    <StripeCheckout 
      label = 'Pay Now'
      name = 'Clothing Ltd'
      billingAddress
      shippingAddress
      image = 'https://svgshare.com/i/CUz.svg'
      description = {`Your total is £${price}`}
      amount={priceForStripe}
      panelLabel = 'Pay Now'
      token={onToken}
      stripeKey = {publishableKey}
      />
  );
};

export default StripeCheckoutButton;