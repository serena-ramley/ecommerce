import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; // price in cents
  const publishableKey =
    "pk_test_51IA7I1JDs5kPiuKHDQ5kIEMC4WGjgnaf6nFJSfiyjqsOFo55bFE29pKEwG5ybSz3aBNmWYHslBY6ePxudFU92CRQ00ehTIAX3U";

  const onToken = (token) => {
    // Not actually processing payment
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Garden Shop Inc."
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      image={Logo}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
