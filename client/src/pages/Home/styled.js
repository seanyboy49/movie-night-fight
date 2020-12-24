import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SectionContainer = styled.div`
  width: 337px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Text = styled.p`
  font-family: Bebas Neue;
  font-size: 30px;
  margin: ${(props) => props.margin || '10%'};
`

export const Image = styled.img`
  margin: 15px 0;
`

export const Header = styled.p`
  font-family: Bevan;
  font-size: 20px;
  margin: 0 10%;
  text-align: left;
`

export const TextContainer = styled.div`
  margin: 5% 0;
`

export const SmallerText = styled.span`
  font-size: 20px;
`

export const MediumText = styled.p`
  font-size: 26px;
  color: #ffffff;
  opacity: 70%;
  margin: 0;
`

export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px;
  cursor: pointer;
`

export const SignUpContainer = styled.div`
  width: 337px;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const SignUpLink = styled(Link)`
  text-decoration: none;
  color: white;
  border: 3px solid white;
  font-size: 27px;
  padding: 10px;
  margin: 10px;
`

export const Space = styled.div`
  margin: 7px;
`

export const HomePosterContainer = styled.div`
  position: relative;
  height: 440px;
  width: 337px;
  margin: 10px 0;
`
