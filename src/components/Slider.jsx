import React from 'react';
import styled from 'styled-components';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  bottom: 0%;
  left: ${props => (props.direction === "left" && "10px")};
  right: ${props => (props.direction === "right" && "10px")};
  margin: auto;
  opacity: 0.5;
  cursor: pointer;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Img = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  font-size: 20px;
  font-weight: 500;
`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowBackIosOutlinedIcon />
      </Arrow>
      <Wrapper>
        <Slide>
        <ImgContainer>
          <Img src={require("../photos/lady-removebg.png")} alt="Your Img" />
        </ImgContainer>
        <InfoContainer>
          <Title>SUMMER SALE</Title>
          <Desc>DON'T COMPROMISE ON STYLE! GET 50% OFF FOR NEW ARRIVALES.</Desc>
          <Button>SHOW NOW</Button>
        </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <KeyboardArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
