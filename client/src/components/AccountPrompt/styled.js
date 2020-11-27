import styled, { css } from 'styled-components'

const alignCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const PromptContainer = styled.div`
  background-color: white;
  border-radius: 10%;
`

export const FormContainer = styled.div`
  ${alignCenter};
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
  padding-left: 10px;
  margin-bottom: 25px;

  ::placeholder {
    color: #c4c4c4;
  }
`

export const AccountP = styled.p`
  font-family: Bebas Neue;
  font-size: 24px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 15px 0 25px 0;
`
