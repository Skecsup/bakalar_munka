import React, { useContext } from "react";
import { CartContext } from "../../../store/cart-context";
import { Container, Pricebar, TopBar } from "./Cart_Styling";
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
      <TopBar>
        <div>Product</div>
        <div>Countety</div>
        <div>Subtotal</div>
      </TopBar>
      <CartItems cartItems={cartCtx.cartItems} />
      <Pricebar>
        <div></div>
        <div></div>
        <div>
          <div>{`Subtotal: ${finalprice} EUR`}</div>
          <div>Tax: {finalprice * 0.2} EUR</div>
          <div>Total: {finalprice * 1.2} EUR</div>
        </div>
      </Pricebar>
    </Container>
  );
}

export default Basket;
