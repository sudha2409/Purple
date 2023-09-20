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
    const publishableKey =
      "pk_test_51NnfTYSBCBr2yOYTF32oke7wO8c9ZO2siEjomvlKEkKtzWu6hnOcvtm090pBKVJp9GMoHPCXsrf6MWwFLncbQU2100OMePOgLr";
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
        console.log("payment response", response);
        let clientSecret = response.data.client_secret;
        setClientSecret(clientSecret);
      });
  }, []);

  return (
    <>
      <h1>React Stripe and the Payment Element</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
};

export default Payment;
