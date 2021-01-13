import React from 'react'

import { ButtonContainer } from '../../components/Button/styled'
import { PromptLink } from '../../components/AccountPrompt/styled'
import { LeftCutout, RightCutout } from '../../styles/Ticket'
import { SignUpLink, SignUpContainer, Space } from './styled'
import routes from '../../routes'

const { signup, login } = routes.public

const Register = () => {
  return (
    <SignUpContainer id="signUp">
      <Space />
      <ButtonContainer>
        <LeftCutout height={'28'} width={'15'} />
        <p>
          <SignUpLink to={signup}>Sign Up</SignUpLink>
        </p>
        <RightCutout height={'28'} width={'15'} />
      </ButtonContainer>
      <PromptLink to={login}>I have an account</PromptLink>
    </SignUpContainer>
  )
}

export default Register
