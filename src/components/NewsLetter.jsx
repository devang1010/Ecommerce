import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components'

const Container = styled.div`
    height: 50vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Description = styled.div`
    font-size: 28px;
    font-weight: 300;
    margin-bottom: 20px;
`
const InputContainer = styled.div`
    width: 50%;
    height: 60px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    padding-left: 20px;
`
const Input = styled.input`
    border: none;
    flex: 8;
    font-size: 1.2em;

    &:focus{
        border: none;
        outline: none;
    }
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    transition: 0.5 ease;

    &:hover{
        cursor: pointer;
        border: 1px solid black;
    }
`

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
        <Description>Get timely update from your favorite products.</Description>
        <InputContainer>
            <Input type='email' placeholder='Your email'/>
            <Button>
                <SendIcon />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter
