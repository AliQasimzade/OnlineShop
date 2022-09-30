import React from "react";
import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { popularProducts } from "../../../data";
import {
  Container,
  Info,
  Icon,
  Image,
  Circle,
} from "./ProductStyled";

const Product = ({ item, setBadge, badge, setBasket, basket }) => {
  const handleAddCart = (id) => {
    const product = basket.find((item) => item.id === id);
    console.log(basket);
    if (product) {
      alert("You already added this cart");
    } else {
      setBadge(badge + 1);
      setBasket([
        ...basket,
        {
          id: id,
          count: 1,
          img: popularProducts[id - 1].img,
          title: popularProducts[id - 1].title,
          price: popularProducts[id - 1].price,
          totalPrice: popularProducts[id - 1].totalPrice
        },
      ]);
      console.log(basket)
    }
  };
  return (
    <Container>
      <Circle />
      <div style={{zIndex: 2, width:"220px"}}>
      <Image src={item.img}  />
      <p>{item.title}</p>
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
