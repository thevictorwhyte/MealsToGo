import React from "react";
import { CardField } from "@stripe/stripe-react-native";

import { cardTokenRequest } from "../../../services/checkout/checkout.service";

// pk_test_51MCpSzJrdPLkv7iH3pKlyUESPdPWgFZkAYUdkTq9v3FHGWmhr7JfXDNYaGs5fwLbCohwXRafb09b2DwcpqdllkBA00GlLQNdfJ
export const CreditCardInput = ({ name, onSuccess, onError }) => {
  const onChange = async (cardDetails) => {
    const { complete, number, expiryMonth, cvc, expiryYear } = cardDetails;
    const card = {
      number: number,
      exp_month: expiryMonth,
      exp_year: expiryYear,
      cvc: cvc,
      name: name,
    };
    if (complete) {
      try {
        const info = await cardTokenRequest(card);
        onSuccess(info);
      } catch (err) {
        onError();
      }
    }
  };

  return (
    <CardField
      postalCodeEnabled={false}
      dangerouslyGetFullCardDetails={true}
      placeholders={{
        number: "4242 4242 4242 4242",
      }}
      cardStyle={{
        backgroundColor: "#FFFFFF",
        textColor: "#000000",
      }}
      style={{
        width: "90%",
        height: 50,
        // marginVertical: 30,
      }}
      onCardChange={onChange}
    />
  );
};
