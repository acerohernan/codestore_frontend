import React from "react";
import { useNavigate } from "react-router-dom";

import image from "../../../../assets/noproducts.jpg";
import noproducts from "./noproducts.module.scss";

function NoProducts({ closeCart }) {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    closeCart();
    navigate("/collections");
  };

  return (
    <div className={noproducts.container}>
      <img src={image} alt="no-prodcuts" />
      <span>Your cart is empty. Do some shopping!</span>
      <button onClick={handleContinueShopping}>Continue shopping</button>
    </div>
  );
}

export default NoProducts;
