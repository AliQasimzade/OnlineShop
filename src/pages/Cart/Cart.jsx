import { Link } from "react-router-dom";
import { Add, Remove } from "@material-ui/icons";
import { popularProducts } from "../../data";
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
  ProductId,
  ProductPrice,
  ProductName,
  Details,
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

const Cart = ({ basket, badge, setBasket, setBadge }) => {
  const handleAddCount = (id) => {
    const foundProduct = basket.find((item) => item.id === id);
    const newCartItems = basket.filter((item) => item.id !== id);

    setBasket([
      {
        ...foundProduct,
        count: foundProduct.count + 1,
        totalPrice:
          foundProduct.totalPrice + popularProducts[id - 1].totalPrice,
      },
      ...newCartItems,
    ]);
    console.log(basket);
  };
  const handleRemoveCount = (id) => {
    const foundProduct = basket.find((item) => item.id === id);
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
          totalPrice:
            foundProduct.totalPrice - popularProducts[id - 1].totalPrice,
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
        </Top>
        {basket.length > 0 ? (
          <Bottom>
            <Info>
              {basket.map((item) => (
                <Product key={item.id}>
                  <ProductDetail>
                    <Image src={item.img} />
                    <Details>
                      <ProductName>
                        <b>
                          Product: <span>{item.title}</span>
                        </b>
                      </ProductName>
                      <ProductId>
                        <b>
                          Price: <span>{item.price}</span>
                        </b>
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
