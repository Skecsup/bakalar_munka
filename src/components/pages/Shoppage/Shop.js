import React, { useState } from "react";
import { ShopContainer, ShopTopMenu } from "./Shop_Styling";

import Products from "./UI/Products";

function Shop() {
  const [state] = useState({
    products: [
      {
        id: 1,
        name: "Traktor",
        desc: "Nagyon fain Traktor",
        kep: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Massey_Ferguson_6490_Dynashift.jpg/1200px-Massey_Ferguson_6490_Dynashift.jpg",
        price: 10,
        count: 1,
      },
      {
        id: 2,
        name: "Kamion",
        desc: "Nagyon fain Kamion",
        kep: "https://www.manoriginal.sk/wp-content/uploads/2018/12/Viano%C4%8Dn%C3%BD-truck-MAN.jpg",
        price: 15,
        count: 1,
      },
      {
        id: 3,
        name: "Tricikli",
        desc: "Nagyon fain Tricikli",
        kep: "https://manobabahaz.hu/kepek/05709_2.jpg",
        price: 20,
        count: 1,
      },
      {
        id: 4,
        name: "Vodor",
        desc: "nagyon kiraly kis vodor",
        kep: "https://webimg.praktiker.hu/_upload/images/praktiker_catalog/186572/186572_01_vodor-14l-horganyzott.png",
        price: 5,
        count: 1,
      },
      {
        id: 5,
        name: "Rebeka",
        desc: "Rebeka nagyon szép lány",
        kep: "https://scontent-vie1-1.xx.fbcdn.net/v/t1.18169-9/20842048_163243887557537_5219618750663357408_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=19026a&_nc_ohc=k69sZVaN4FQAX98hgle&tn=pei7TITL-wGJ-VGg&_nc_ht=scontent-vie1-1.xx&oh=7dc0383f022fc7051ee930da62bb3ef3&oe=61CB0D54",
        price: 100,
        count: 1,
      },
    ],
  });

  return (
    <ShopContainer>
      <ShopTopMenu>xd</ShopTopMenu>
      <Products elements={state.products} />
    </ShopContainer>
  );
}

export default Shop;
