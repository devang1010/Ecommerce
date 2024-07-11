import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``

const Desc = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

    &:hover{
        cursor: pointer;
    }
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`


const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LAMA.</Logo>
        <Desc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo est, corrupti odio sint rerum dolores a nobis quis, blanditiis repellat praesentium nihil nisi at in? Unde, porro magni! Officia, ratione!
        </Desc>
        <SocialContainer>
            <SocialIcon color='3B5999'>
                <FacebookIcon />
            </SocialIcon>
            <SocialIcon color='E4405F'>
                <InstagramIcon />
            </SocialIcon>
            <SocialIcon color='55ACEE'>
                <XIcon />
            </SocialIcon>
            <SocialIcon color='E60023'>
                <PinterestIcon />
            </SocialIcon>
        </SocialContainer>

      </Left>

      <Center>
        <Title>Usefull Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Women Fashion</ListItem>
            <ListItem>Accessorioes</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>WhishList</ListItem>
            <ListItem>WhishList</ListItem>
            <ListItem>Terms</ListItem>
        </List>
      </Center>


      <Right>
        <Title>Contact</Title>
        <ContactItem>
            <LocationOnIcon />622 Dixie Path , South Tobinchester 98336
        </ContactItem>
        <ContactItem>
            <LocalPhoneIcon />+1 234 56 78
        </ContactItem>
        <ContactItem>
            <EmailIcon /> contact@lama.dev
        </ContactItem>

        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>

      
    </Container>
  )
}

export default Footer
