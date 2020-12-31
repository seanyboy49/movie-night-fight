import styled, { css } from 'styled-components'

export const SmallText = styled.p`
  font-family: bevan;
  font-size: 18px;
  cursor: pointer;
`

export const H2 = styled.h2`
  font-family: bebas neue;
  font-size: 30px;
`

export const BebasText = styled.p`
  font-family: bebas neue;
  font-size: ${(props) => props.size || '12px'};
  margin: ${(props) => props.margin || '0px'};
  text-align: ${(props) => props.align || 'center'};
`

export const LoadingText = styled.p`
  font-family: bebas neue;
  font-size: ${(props) => props.size || '12px'};
  margin: 0;
  text-align: center;
  top: 30%;

  ${(props) => {
    return (
      !props.isActive &&
      css`
        opacity: 0;
      `
    )
  }}
`

export const Divider = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em auto;
  width: 70%;
  padding: 0;
`
