import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Menu, MenuItem, Button } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { useRecoilState } from "recoil";
import { userData } from "../../store/atoms";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import {
  ItemMenu,
  Container,
  Center,
  Right,
  Logo,
  Left,
  Wrapper,
} from "./NavbarStyled";
import ListOne from "./Lists/ListOne";
import ListTwo from "./Lists/ListTwo";
import "./Navbar.css";

const Navbar = ({
  badge,
  showListOne,
  showListTwo,
  setShowListOne,
  setShowListTwo,
  setBadge,
  setLogin,
  setBasket,
}) => {
  const [user, setUser] = useRecoilState(userData);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutUser = async () => {
    window.location.reload();
    await signOut(auth);
    setLogin(false);
    setBasket([]);
    setBadge(0);
    setUser({});
    console.log(user);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </Logo>
        </Left>
        <Center>
          <ListOne
            showListOne={showListOne}
            setShowListOne={setShowListOne}
            setShowListTwo={setShowListTwo}
          />
          <ListTwo
            showListTwo={showListTwo}
            setShowListOne={setShowListOne}
            setShowListTwo={setShowListTwo}
          />
        </Center>
        <Right>
          <div
            className="right"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {user.email ? (
              <div>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : null}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : null}
                  onClick={handleClick}
                  style={{ textTransform: "lowercase", width: "120px" }}
                  className="user_email"
                >
                  {user.email}
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={logoutUser}>Logout</MenuItem>
                </Menu>
              </div>
            ) : (
              <div
                className="sign_in-sign_up"
                style={{ display: "flex", alignItems: "center" }}
              >
                <Link
                  to="/register"
                  style={{ textDecoration: "none", color: "#555" }}
                >
                  <ItemMenu>REGISTER</ItemMenu>
                </Link>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "#555" }}
                >
                  <ItemMenu>SIGN IN</ItemMenu>
                </Link>
              </div>
            )}
            <Link to="/cart">
              <ItemMenu>
                <Badge badgeContent={badge} color="primary">
                  <ShoppingCartOutlined style={{ color: "#555" }} />
                </Badge>
              </ItemMenu>
            </Link>
          </div>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;