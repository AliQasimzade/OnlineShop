import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { useRecoilState } from "recoil";
import { userData } from "../../store/atoms";
import {
  Container,
  Wrapper,
  Input,
  Button,
  Agreement,
  Form,
  Title,
} from "./RegisterStyled";

const Register = () => {
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const surnameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [userAction, setUserAction] = useRecoilState(userData);
  useEffect(() => {
    console.log(userAction);
  }, [userAction]);

  const submitUser = (e) => {
    e.preventDefault();
    let newUser = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    setUserAction(newUser);
    sendUserData();
  };

  const sendUserData = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log(user);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={(e) => submitUser(e)}>
          <Input placeholder="Name" type="text" ref={nameRef} />
          <Input placeholder="Surname" type="text" ref={surnameRef} />
          <Input placeholder="Email" type="email" ref={emailRef} />
          <Input placeholder="Password" type="password" ref={passwordRef} />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
