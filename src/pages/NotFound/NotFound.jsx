import React from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Container,
  Wrapper,
  Content,
  ContentItem,
  PageNotFound,
} from "./NotFoundStyled";

const NotFound = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <ContentItem id="digit1">4</ContentItem>
          <ContentItem id="digit2">0</ContentItem>
          <ContentItem id="digit3">4</ContentItem>
        </Content>
        <PageNotFound>PAGE NOT FOUND</PageNotFound>
        <Link to="/">
          <Button type="button" name="button">
            Return To Home
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default NotFound;
