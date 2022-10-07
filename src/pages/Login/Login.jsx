import React, { useRef,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { Container, Button, Input, Form, Title, Wrapper } from "./LoginStyled";

const Login = ({ setLogin,setUserAction,setOpen,setOpenMsg }) => {
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
      setOpen(true)
      setOpenMsg("Success");
      let newUser = {
        email: emailRef.current.value
      };

      setUserAction(newUser);
      setTimeout(() => {
        navigate("/");
      }, 1500)
    } catch (error) {
      setOpen(true)
      setOpenMsg("Please,correct user login");
    }
  };
  useEffect(() => {
    setTimeout(() => {
     setOpen(false)
    }, 1500)
  })
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={(e) => login(e)}>
          <Input placeholder="Email" type="email" autoComplete ref={emailRef} />
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