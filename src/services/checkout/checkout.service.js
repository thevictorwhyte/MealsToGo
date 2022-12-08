import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51MCpSzJrdPLkv7iH3pKlyUESPdPWgFZkAYUdkTq9v3FHGWmhr7JfXDNYaGs5fwLbCohwXRafb09b2DwcpqdllkBA00GlLQNdfJ"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });
