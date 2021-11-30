import React from "react";
import Product from "./Product";

function Products(props) {
  const style = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={style}>
      {props.elements.map((element, index) => {
        return (
          <Product
            id={element.id}
            name={element.name}
            desc={element.desc}
            kep={element.kep}
            price={element.price}
          />
        );
      })}
    </div>
  );
}

export default Products;
