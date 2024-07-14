import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from '@mui/material/Badge';
import {mobile} from '../responsive'
import { backdropClasses } from "@mui/material";

const Container = styled.div`
  height: 40px;
  margin-bottom: 30px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Lnaguage = styled.span`
  cursor: pointer;
  font-size: 14px;
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
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 1.2em;
  cursor: pointer;
  margin-left: 10%;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Lnaguage>EN</Lnaguage>
          <SearchContainer>
            <Input />
            <SearchIcon style={{color:"gray", fontSize: 18}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LAMA.</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlinedIcon />
          </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
