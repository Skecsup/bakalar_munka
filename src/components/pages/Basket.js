import React, { useContext } from "react";
import { CartContext } from "../../store/cart-context";
import Products from "./Shoppage/UI/Products";

function Basket() {
  const cartCtx = useContext(CartContext);
  return (
    <div>
      <Products elements={cartCtx.cartItems} />
    </div>
  );
}

export default Basket;
