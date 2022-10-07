import React, { lazy, Suspense } from "react";
import { Container } from "./ProductsStyled";
const Product = lazy(() => import("./Product/Product"));

const Products = ({
  setBadge,
  badge,
  setData,
  data,
  setBasket,
  basket,
  login,
  open,
  setOpen,
  setOpenMsg,
}) => {
  return (
    <Container>
      {data.map((item) => (
        <Suspense fallback={<div>...Loading</div>} key={item.id}>
          <Product
            open={open}
            setOpenMsg={setOpenMsg}
            setOpen={setOpen}
            item={item}
            key={item.id}
            setBadge={setBadge}
            badge={badge}
            setData={setData}
            data={data}
            setBasket={setBasket}
            basket={basket}
            login={login}
          />
        </Suspense>
      ))}
    </Container>
  );
};

export default Products;
