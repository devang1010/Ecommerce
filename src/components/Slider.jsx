import React from 'react'
import styled from 'styled-components';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: coral;
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Slider = () => {
  return (
    <Container>
      <Arrow>
        <ArrowBackIosOutlinedIcon />
      </Arrow>
      <Arrow>
        <KeyboardArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  )
}

export default Slider
