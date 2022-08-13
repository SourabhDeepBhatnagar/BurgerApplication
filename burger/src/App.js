import React from "react";
import CreateBurger from "./Burger/BurgerComponents/CreateBurger";

export default function App() {
  return (
    <div className="App">
      <CreateBurger
        burgerStack={[
          'Lettuce',
          'Cheese',
          'Lettuce'          
        ]}
      />
    </div>
  );
}
