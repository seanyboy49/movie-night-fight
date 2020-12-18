import React from 'react'
import {
  ButtonContainer,
  LeftCutout,
  RightCutout,
} from '../../components/Button/styled'
import { PromptLink } from '../../components/AccountPrompt/styled'
import { SignUpLink, SignUpContainer, Space } from './styled'

const Register = () => {
  return (
    <SignUpContainer id="signUp">
      <Space />
      <ButtonContainer>
        <LeftCutout />
        <p>
          <SignUpLink to="/signup">Sign Up</SignUpLink>
        </p>
        <RightCutout />
      </ButtonContainer>
      <PromptLink to="/login">i have an account</PromptLink>
    </SignUpContainer>
  )
}

export default Register
