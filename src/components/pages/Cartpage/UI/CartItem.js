import React, { useContext } from "react";
import { CartContext } from "../../../../store/cart-context";
import { StyledCartItem } from "./CartItem_Styling";

function CartItem(props) {
  const cartCtx = useContext(CartContext);

  function removeFromCartHandler() {
    cartCtx.removeFromCart(props.id);
  }

  return (
    <StyledCartItem>
      <div>
        <h1>{props.name}</h1>
        <p>
          {props.price}
          <strong>€</strong>
        </p>
        <p>{props.count}</p>
        <button onClick={removeFromCartHandler}>Remove from Cart</button>
      </div>
      <img src={props.kep} alt="kep" />
    </StyledCartItem>
  );
}

export default CartItem;
