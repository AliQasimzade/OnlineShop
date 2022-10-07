import { Link } from "react-router-dom";
import { Add, Remove } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import {
  Container,
  Btn,
  Summary,
  SummaryItem,
  SummaryTitle,
  SummaryItemPrice,
  SummaryItemText,
  Top,
  Product,
  ProductAmount,
  ProductAmountContainer,
  ProductDetail,
  ProductPrice,
  ProductName,
  ProductId,
  Details,
  DetailsWrapper,
  Image,
  Info,
  TopText,
  TopTexts,
  TopButton,
  PriceDetail,
  Bottom,
  Title,
  Wrapper,
} from "./CartStyled";

const Cart = ({ basket, badge, setBasket, setBadge,data }) => {
  const handleAddCount = (id) => {
    const foundProduct = basket.find((item) => item.id === id);
    const newCartItems = basket.filter((item) => item.id !== id);

    setBasket([
      {
        ...foundProduct,
        count: foundProduct.count + 1,
        totalPrice:
          foundProduct.totalPrice + data[id - 1].totalPrice,
      },
      ...newCartItems,
    ]);
    console.log(basket);
  };
  const handleRemoveCount = (id) => {
    const foundProduct = basket.find((item) => item.id === id);
    const newCartItems = basket.filter((item) => item.id !== id);

    if (foundProduct.count === data[id - 1].count) {
      const newCartItems = basket.filter((item) => item.id !== id);
      setBasket(newCartItems);
      setBadge(badge - 1);
    } else {
      setBasket([
        {
          ...foundProduct,
          count: foundProduct.count - 1,
          totalPrice:
            foundProduct.totalPrice - data[id - 1].totalPrice,
        },
        ...newCartItems,
      ]);
      console.log(basket);
    }
  };
  const onRemove = (product) => {
    setBadge(badge - 1)
   const newCartItems = basket.filter(item => item.id !== product.id);
   setBasket(newCartItems)
  }

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
        </Top>
        {basket.length > 0 ? (
          <Bottom>
            <Info>
              {basket.map((item) => (
                <Product key={item.id}>
                  <ProductDetail>
                    <div className="image" style={{width: "170px",height:"fit-content"}}>
                    <Image src={item.img} />
                    </div>
                    <Details>
                     <DetailsWrapper>
                     <ProductName>
                        <b>
                         <span>{item.name}</span>
                        </b>
                      </ProductName>
                      <ProductId>
                        <b>
                         <span>{item.price} &#8380;</span>
                        </b>
                      </ProductId>
                     </DetailsWrapper>
                      <Button variant="outlined" style={{width:"100px"}}onClick={() => onRemove(item)}>Remove</Button>
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
                    <ProductPrice>$ {item.totalPrice}</ProductPrice>
                  </PriceDetail>
                </Product>
              ))}
            </Info>
            <Summary style={{ height: "fit-content" }}>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>
                  $ {basket.reduce((sum, item) => sum + item.totalPrice, 0)}
                </SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>
                  $ {basket.reduce((sum, item) => sum + item.totalPrice, 0)}
                </SummaryItemPrice>
              </SummaryItem>
              <Btn>CHECKOUT NOW</Btn>
            </Summary>
          </Bottom>
        ) : (
          <h2>No item here</h2>
        )}
      </Wrapper>
    </Container>
  );
};

export default Cart;
