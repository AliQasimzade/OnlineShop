import React from "react";
import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";

import {
  Container,
  Info,
  Icon,
  Image,
} from "./ProductStyled";
import { useNavigate } from "react-router-dom";

const Product = ({ item, setBadge, badge, setBasket, basket,data,login }) => {
  const navigate = useNavigate()
  const handleAddCart = (id) => {
    const product = basket.find((item) => item.id === id);
  if(login){
    if (product) {
      alert("You already added this cart");
    } else {
      setBadge(badge + 1);
      setBasket([
        ...basket,
        {
          id: id,
          count: 1,
          img: data[id - 1].img,
          name: data[id - 1].name,
          price: data[id - 1].price,
          totalPrice: data[id - 1].totalPrice
        },
      ]);
    
    }
  }else{
    navigate("/login")
    alert("Please, login")
  }
    
  };
  return (
    <Container>  
      <div style={{zIndex: 2, width:"220px"}}>
      <Image src={item.img}  />
      <p>{item.name}</p>
      <span>{item.price} <span>&#8380;</span></span>
      </div>
      <Info>       
        <Icon onClick={() => handleAddCart(item.id)}>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />     
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
