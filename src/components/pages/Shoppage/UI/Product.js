import { StyledProduct } from "./Product_Styling";
import React, { useContext } from "react";
import { CartContext } from "../../../../store/cart-context";

function Product(props) {
  const cartCtx = useContext(CartContext);

  const itemIsInCart = cartCtx.itemIsInCart(props.id);

  function addToCartHandler() {
    if (itemIsInCart) {
      cartCtx.cartItems.find((element) => element.id === props.id).count += 1;
    } else {
      cartCtx.addToCart({
        id: props.id,
        name: props.name,
        desc: props.desc,
        kep: props.kep,
        price: props.price,
        count: props.count,
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

      <button onClick={addToCartHandler}>Add to cart</button>
    </StyledProduct>
  );
}

export default Product;
