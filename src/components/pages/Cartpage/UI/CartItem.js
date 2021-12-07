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
      <section>
        <img src={props.kep} alt="kep" />
        <div>
          <p>{props.name}</p>
          <p>{props.price}€</p>

          <button onClick={removeFromCartHandler}>Remove</button>
        </div>
      </section>
      <input
        onChange={(event) => cartCtx.productChange(event, props.id)}
        value={props.count}
        type="number"
        min="1"
      />
      <div>{props.price * props.count} EUR</div>
    </StyledCartItem>
  );
}

export default CartItem;
