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


const Product = ({ item, setBadge, badge, setBasket, basket,data,login,open,setOpen,setOpenMsg }) => {
 
  const handleAddCart = (id) => {
    const product = basket.find((item) => item.id === id);
  if(login){
    if (product) {
      setOpen(true)
      setOpenMsg("You already added this cart");
      setTimeout(() => {
     setOpen(false)
      }, 1000)
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
  setOpenMsg("Please, Login")
    setOpen(true)
    setTimeout(() => {
      setOpen(false)
    },1500)
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