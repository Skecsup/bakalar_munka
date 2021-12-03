import React, { useContext } from "react";
import { CartContext } from "../../../store/cart-context";
import { Container, LeftSide, RightSide } from "./Cart_Styling";
import CartItems from "./UI/CartItems";

function Basket() {
  const cartCtx = useContext(CartContext);
  let finalprice = 0;
  let totalitems = 0;
  cartCtx.cartItems.forEach((element) => {
    finalprice += element.price * element.count;
    totalitems += element.count;
  });

  return (
    <Container>
      <LeftSide>
        <CartItems cartItems={cartCtx.cartItems} />
      </LeftSide>
      <RightSide>
        <h1>Price: {finalprice}€</h1>
        <p>Total items: {totalitems}</p>
      </RightSide>
    </Container>
  );
}

export default Basket;
