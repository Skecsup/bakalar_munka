import { StyledProduct } from "./Product_Styling";
import React, { useContext } from "react";
import { CartContext } from "../../../../store/cart-context";

function Product(props) {
  const cartCtx = useContext(CartContext);

  const itemIsInCart = cartCtx.itemIsInCart(props.id);

  console.log(`${itemIsInCart} ---- ${props.id}`);

  function toggleCartStatusHandler() {
    if (itemIsInCart) {
      cartCtx.removeFromCart(props.id);
    } else {
      cartCtx.addToCart({
        id: props.id,
        name: props.name,
        desc: props.desc,
        kep: props.kep,
        price: props.price,
      });
    }
  }

  return (
    <StyledProduct>
      <h1>{props.name}</h1>
      <p>{props.desc}</p>
      <img src={props.kep} alt="kep" />
      <p>
        {props.price}
        <strong>€</strong>
      </p>

      <button onClick={toggleCartStatusHandler}>
        {itemIsInCart ? "Remove from cart" : "Add to cart"}
      </button>
    </StyledProduct>
  );
}

export default Product;
