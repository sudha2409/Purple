import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { BASE_AUTH_URL } from "../../api/config";
import axios from "axios";

const Payment = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
    setStripePromise(loadStripe(publishableKey));
  }, []);

  useEffect(() => {
    const accessAuth = JSON.parse(localStorage.getItem("accessAuth"));
    axios
      .post(
        `${BASE_AUTH_URL}/api/v1/stripe/checkout-payment`,
        {},
        {
          headers: {
            Authorization: accessAuth?.accessToken,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        let clientSecret = response.data.client_secret;
        setClientSecret(clientSecret);
      });
  }, []);

  return (
    <>
      <h1>Upgrade to Purplemaze Premium</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
};

export default Payment;
