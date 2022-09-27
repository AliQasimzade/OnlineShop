import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { popularProducts } from "../data";
import Button from "@material-ui/core/Button";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Btn = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = ({ basket, badge, setBasket, setBadge,total,setTotal }) => {
  const handleAddCount = (id) => {
    const foundProduct = basket.find((item) => item.id == id);
    const newCartItems = basket.filter((item) => item.id !== id);

    setBasket([
      {
        ...foundProduct,
        count: foundProduct.count + 1,
        price:foundProduct.price + popularProducts[id - 1].price
       
      },
      ...newCartItems,
    ]);
    console.log(basket);
  };
  const handleRemoveCount = (id) => {
    const foundProduct = basket.find((item) => item.id == id);
    const newCartItems = basket.filter((item) => item.id !== id);

    if (foundProduct.count === popularProducts[id - 1].count) {
      const newCartItems = basket.filter((item) => item.id !== id);
      setBasket(newCartItems);
      setBadge(badge - 1);
    } else {
      setBasket([
        {
          ...foundProduct,
          count: foundProduct.count - 1,
          price:foundProduct.price - popularProducts[id - 1].price
        },
        ...newCartItems,
      ]);
      console.log(basket);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to="/">
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>
              Shopping Bag({basket.length === 0 ? 0 : basket.length})
            </TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {basket.length > 0 &&
              basket.map((item) => (
                <Product>
                  <ProductDetail>
                    <Image src={item.img} />
                    <Details>
                      <ProductName>
                        <b>Product:</b>
                      </ProductName>
                      <ProductId>
                        <b>ID:</b> {item.id}
                      </ProductId>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Button onClick={() => handleAddCount(item.id)}>
                        <Add />
                      </Button>
                      <ProductAmount>{item.count}</ProductAmount>
                      <Button onClick={() => handleRemoveCount(item.id)}>
                        <Remove />
                      </Button>
                    </ProductAmountContainer>
                    <ProductPrice>$ {item.price}</ProductPrice>
                  </PriceDetail>
                </Product>
              ))}
          </Info>
          {basket.length > 0 && (
            <Summary style={{ height: "fit-content" }}>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>
                  $ {basket.reduce((sum, item) => sum + item.price, 0)}
                </SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>
                  $ {basket.reduce((sum, item) => sum + item.price, 0)}
                </SummaryItemPrice>
              </SummaryItem>
              <Btn>CHECKOUT NOW</Btn>
            </Summary>
          )}
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
