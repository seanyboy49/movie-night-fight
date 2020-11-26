import styled, { css } from 'styled-components'

const alignCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const FormContainer = styled.div`
  ${alignCenter};
  background-color: white;
  border-radius: 5%;
  padding: 20px;
`

export const Form = styled.form`
  ${alignCenter};
`

export const Input = styled.input`
  width: 281px;
  height: 38px;
  outline: none;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  font-family: Bebas Neue;
  font-size: 24px;
  color: #c4c4c4;
  padding-left: 10px;
  margin-bottom: 25px;
`
