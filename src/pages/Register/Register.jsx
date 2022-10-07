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

const Register = ({ setLogin, setOpen, setOpenMsg }) => {
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
    };
    setUserAction(newUser);
    sendUserData();
  };

  const sendUserData = async () => {
    try {
     await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );

      setLogin(true);
      setOpen(true);
      setOpenMsg("Succesfully login")
      setTimeout(() => {
        navigate("/");
        setOpen(false);
      }, 1000);
    } catch (error) {
      if (
        nameRef.current.value === "" ||
        surnameRef.current.value === "" ||
        emailRef.current.value === "" ||
        passwordRef.current.value === ""
      ) {
        setOpenMsg("Empty inputs or input");
        setOpen(true);
        setTimeout(() => {
          setOpen(false);
        }, 1000);
      } else {
        setOpen(true);
        setOpenMsg("This user already logged");
        setTimeout(() => {
          setOpen(false);
        }, 1000);
      }
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
