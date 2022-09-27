import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ setBadge, badge,setData,data,setBasket,basket,total,setTotal }) => {
  
  return (
    <Container>
      {data.map((item) => (
        <Product
          item={item}
          key={item.id}
          setBadge={setBadge}
          badge={badge}
          setData={setData}
          data={data}
          setBasket={setBasket}
          basket={basket}
          total={total}
          setTotal={setTotal}
        />
      ))}
    </Container>
  );
};

export default Products;
