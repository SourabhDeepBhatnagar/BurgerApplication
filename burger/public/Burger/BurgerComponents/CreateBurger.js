import React from "react";

import BreadLower from "./BurgerComponents/BreadLower";
import BreadUpper from "./BurgerComponents/BreadUpper";
import Cheese from "./BurgerComponents/Cheese";
import Lettuce from "./BurgerComponents/Lettuce";
import Tomatoes from "./BurgerComponents/Tomatoes";

import { BurgerComponentEnum } from "../Resources";

export default function CreateBurger(props) {
  const BurgerStack = props.burgerStack.map((item, index) => {
    switch (item) {
      case BurgerComponentEnum.CHEESE:
        return <Cheese key={index} />;
      case BurgerComponentEnum.LETTUCE:
        return <Lettuce key={index} />;
      default:
        return null;
    }
  });

  return (
    <div>
      <BreadUpper />
      {BurgerStack}
      <BreadLower />
    </div>
  );
}
