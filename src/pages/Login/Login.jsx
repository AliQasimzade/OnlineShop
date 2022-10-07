import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { Container, Button, Input, Form, Title, Wrapper } from "./LoginStyled";

const Login = ({ setLogin,setUserAction }) => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passWordRef = useRef("");

  const login = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passWordRef.current.value
      );
      setLogin(true);
      alert("Success");
      let newUser = {
        email: emailRef.current.value
      };

      setUserAction(newUser);
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={(e) => login(e)}>
          <Input placeholder="Email" type="email" ref={emailRef} />
          <Input placeholder="Password" type="password" ref={passWordRef} />
          <Button>LOGIN</Button>
          <Link to="/">DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link to="/register" style={{ textDecoration: "none" }}>
            CREATE A NEW ACCOUNT
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
