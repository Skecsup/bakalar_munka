import React, { useState } from "react";
import {
  ShopContainer,
  ShopInnerContainer,
  ShopSideMenu,
  ShopTopMenu,
} from "./Shop_Styling";

import Products from "./UI/Products";

function Shop() {
  const [state, setState] = useState({
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
        id: 3,
        name: "Tricikli",
        desc: "Nagyon fain Tricikli",
        kep: "https://cdn.corporatefinanceinstitute.com/assets/products-and-services-1024x1024.jpeg",
        price: 20,
      },
      {
        id: 3,
        name: "Tricikli",
        desc: "Nagyon fain Tricikli",
        kep: "https://cdn.corporatefinanceinstitute.com/assets/products-and-services-1024x1024.jpeg",
        price: 20,
      },
      {
        id: 3,
        name: "Tricikli",
        desc: "Nagyon fain Tricikli",
        kep: "https://cdn.corporatefinanceinstitute.com/assets/products-and-services-1024x1024.jpeg",
        price: 20,
      },
      {
        id: 3,
        name: "Tricikli",
        desc: "Nagyon fain Tricikli",
        kep: "https://cdn.corporatefinanceinstitute.com/assets/products-and-services-1024x1024.jpeg",
        price: 20,
      },
    ],
  });

  return (
    <ShopContainer>
      <ShopTopMenu></ShopTopMenu>
      <ShopInnerContainer>
        <ShopSideMenu>
          <input type="text" />
          <div>
            <input type="checkbox" id="funyiro" name="funyiro" />
            <label for="funyiro">Funyiro</label>
          </div>
          <div>
            <input type="checkbox" id="jatek" name="jatek" />
            <label for="jatek">Jatek</label>
          </div>
          <div>
            <input type="checkbox" id="vegyszer" name="vegyszer" />
            <label for="vegyszer">Vegyszer</label>
          </div>
        </ShopSideMenu>
        <Products elements={state.products} />
      </ShopInnerContainer>
    </ShopContainer>
  );
}

export default Shop;
