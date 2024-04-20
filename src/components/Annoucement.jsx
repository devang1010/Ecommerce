import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    background-color: teal;
    height: 30px;
    margin-bottom: 0px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`
const Annoucement = () => {
  return (
    <Container>
      Super Deal! Free shopping over 50$.
    </Container>
  )
}

export default Annoucement
