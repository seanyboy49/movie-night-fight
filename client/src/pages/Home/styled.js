import styled from 'styled-components'

export const SectionContainer = styled.div`
  width: 337px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 10%;
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
