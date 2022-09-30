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
  Right,
  Logo,
  Left,
  Wrapper,
} from "./NavbarStyled";

const Navbar = ({ badge }) => {
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
    setTimeout(() => {
      setUser({});
    }, 1000);
  };

  return (
    <Container>
      <Wrapper>
        <Left style={{ marginLeft: "10px" }}>
          <Logo>LAMA</Logo>
        </Left>
        <Right style={{ justifyContent: "flex-end" }}>
          <div
            className="right"
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "10px",
            }}
          >
            {user.email ? (
              <div>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  style={{ textTransform: "lowercase" }}
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
                class="sign_in-sign_up"
                style={{ display: "flex", alignItems: "center" }}
              >
                <Link to="/register" style={{ textDecoration: "none",color: "#555" }}>
                  <ItemMenu>REGISTER</ItemMenu>
                </Link>
                <Link to="/login" style={{ textDecoration: "none",color:"#555" }}>
                  <ItemMenu>SIGN IN</ItemMenu>
                </Link>
              </div>
            )}
            <Link to="/cart">
              <ItemMenu>
                <Badge badgeContent={badge} color="primary">
                  <ShoppingCartOutlined style={{color:"#555"}}/>
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
