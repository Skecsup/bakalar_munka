import React from "react";
import CartItem from "./CartItem";

function CartItems(props) {
  return (
    <div>
      {props.cartItems.map((cartItem, index) => {
        return (
          <CartItem
            key={index}
            id={cartItem.id}
            name={cartItem.name}
            desc={cartItem.desc}
            kep={cartItem.kep}
            price={cartItem.price}
            count={cartItem.count}
          />
        );
      })}
    </div>
  );
}

export default CartItems;
