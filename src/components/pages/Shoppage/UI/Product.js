import React from "react";
import { StyledProduct } from "./Product_Styling";

function Product(props) {
  return (
    <StyledProduct>
      <h1>{props.name}</h1>
      <p>{props.desc}</p>
      <img src={props.kep} alt="kep" />
      <p>
        {props.price}
        <strong>€</strong>
      </p>

      <button>Add to cart</button>
    </StyledProduct>
  );
}

export default Product;
