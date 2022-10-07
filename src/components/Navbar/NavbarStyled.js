import styled from "styled-components";
import { mobile } from "../../responsive";
const Container = styled.div`
  height: fit-content;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 99;
`;

const Wrapper = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 95vw;
  margin: 0 auto;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ flex: "none" })}
`;

const Logo = styled.div`
 width: 70px;
 height: 70px;
 border-radius: 50%;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 10px;
  
`;
const Center = styled.div`
display: flex;
align-items:center; 
`

const ItemMenu = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
export {ItemMenu,Container,Right,Logo,Left,Wrapper,Center}