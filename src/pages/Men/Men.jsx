import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Container, Info, Icon, Image,Content } from "./MenStyled";
import { useNavigate } from "react-router-dom";

const Men = ({ badge, data, basket, setBasket, setBadge,showListOne,showListTwo,setShowListOne,setShowListTwo,login }) => {
  const [datas, setDatas] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/getMen`)
      .then((res) => setDatas(res.data))
      .catch((err) => console.log(err.message));
  }, []);

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
          totalPrice: data[id - 1].totalPrice,
        },
      ]);
    }
   }else{
    alert("Please, login")
    navigate("/login")
   }
  };
  return (
    <div>
      <Navbar badge={badge}  showListOne={showListOne}
        showListTwo={showListTwo}
        setShowListOne={setShowListOne}
        setShowListTwo={setShowListTwo}/>
      <Content>
      {datas.length > 0 &&
        datas.map((item) => (
          <Container>
            <div style={{ zIndex: 2, width: "220px" }}>
              <Image src={item.img} />
              <p>{item.name}</p>
              <span>
                {item.price} <span>&#8380;</span>
              </span>
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
        ))}
      </Content>  
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Men;