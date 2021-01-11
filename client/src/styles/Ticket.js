import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Ticket = styled.div`
  background-color: black;
  width: ${(props) => props.width || '176'}px;
  height: ${(props) => props.height || '64'}px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 10px 6px -6px #777;
`

export const LeftCutout = styled.div`
  position: absolute;
  background-color: white;
  left: -1%;
  top: 30%;
  width: ${(props) => props.width || '10'}px;
  height: ${(props) => props.height || '22'}px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border-left: none;
`

export const RightCutout = styled.div`
  position: absolute;
  background-color: white;
  right: -1%;
  top: 30%;
  width: ${(props) => props.width || '10'}px;
  height: ${(props) => props.height || '22'}px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  border-right: none;
`

export const Content = styled(Link)`
  background-color: transparent;
  font-family: Bebas Neue;
  font-size: 27px;
  color: white;
  text-decoration: none;
  border: 4px solid white;
  padding: 5px 10px;
`

export const TicketButton = styled.button`
  background-color: transparent;
  border: 3px solid white;
  color: white;
  font-family: Bebas Neue;
  font-size: 27px;
  padding: 5px 10px;
  cursor: pointer;
`
