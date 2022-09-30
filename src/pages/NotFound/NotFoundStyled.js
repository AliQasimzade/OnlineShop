import styled from "styled-components";
import { keyframes } from 'styled-components'
const animationFadeIn = keyframes`
from {
  opacity: 0;
};
100% {
  opacity: 1;
}
`
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #555;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Wrapper = styled.div`
  text-align: center;
`;
const Content = styled.h1`
  margin: 10px;
  cursor: default;
  font-size: 8em;
  transition: font-size 200ms ease-in-out;
  border-bottom: 1px dashed #555;

  span#digit1 {
    animation-delay: 200ms;
  }
  span#digit2 {
    animation-delay: 300ms;
  }
  span#digit3 {
    animation-delay: 400ms;
  }
`;
const ContentItem = styled.span`
  animation: ${animationFadeIn} 2s ease infinite;
`;
const PageNotFound = styled.h3`
  margin: 10px;
  cursor: default;
`;
const Button = styled.button`
  border: 1px solid #555;
  background: transparent;
  outline: none;
  padding: 10px 20px;
  font-size: 1.1rem;
  font-weight: bold;
  color: #555;
  text-transform: uppercase;
  transition: background-color 200ms ease-in;
  margin: 20px 0;
  &:hover {
    background-color: #555;
    color: white;
    cursor: pointer;
  }
`;

export { Button, Container, Wrapper, Content, ContentItem,PageNotFound };
