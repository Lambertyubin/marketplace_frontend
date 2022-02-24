import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "./responsive";
import auth from "../../components/auth/auth-helper";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>FR</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              ELEKSHOP
            </Link>
          </Logo>
        </Center>
        <Right>
          {!auth.isAuthenticated() && (
            <>
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem>SIGN UP</MenuItem>{" "}
              </Link>
              <Link
                to="/signin"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem>SIGN IN</MenuItem>{" "}
              </Link>
            </>
          )}
          {auth.isAuthenticated() && (
            <>
              {auth.isAuthenticated().user.seller && (
                <Link
                  to="/seller/shops"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <MenuItem>MY SHOPS</MenuItem>
                </Link>
              )}
              <Link
                to={"/user/" + auth.isAuthenticated().user._id}
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem> MY PROFILE</MenuItem>{" "}
              </Link>
              <MenuItem>
                <Button
                  color="inherit"
                  onClick={() => {
                    auth.clearJWT(() => navigate("/"));
                  }}
                >
                  SIGN OUT
                </Button>
              </MenuItem>
            </>
          )}

          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
