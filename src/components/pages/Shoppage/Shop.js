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
        kep: "https://cdn.corporatefinanceinstitute.com/assets/products-and-services-1024x1024.jpeg",
        price: 10,
      },
      {
        id: 2,
        name: "Kamion",
        desc: "Nagyon fain Kamion",
        kep: "https://cdn.corporatefinanceinstitute.com/assets/products-and-services-1024x1024.jpeg",
        price: 15,
      },
      {
        id: 3,
        name: "Tricikli",
        desc: "Nagyon fain Tricikli",
        kep: "https://cdn.corporatefinanceinstitute.com/assets/products-and-services-1024x1024.jpeg",
        price: 20,
      },
      {
        id: 4,
        name: "Vodor",
        desc: "nagyon kiraly kis vodor",
        kep: "https://cdn.corporatefinanceinstitute.com/assets/products-and-services-1024x1024.jpeg",
        price: 5,
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
