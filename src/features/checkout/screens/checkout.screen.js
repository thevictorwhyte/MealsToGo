import React, { useContext } from "react";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { CartContext } from "../../../services/cart/cart.context";
import { CreditCardInput } from "../components/credit-card.component";
import { CartIconContainer, CartIcon } from "../components/checkout.styles";

export const CheckoutScreen = () => {
  const { cart, restaurant } = useContext(CartContext);

  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text>Your cart is empty!</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }

  return (
    <SafeArea>
      <CreditCardInput />
    </SafeArea>
  );
};
