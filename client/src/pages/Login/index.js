import React from 'react'

import AccountPrompt from '../../components/AccountPrompt'
import { Background } from '../../styles/Background'
import routes from '../../routes'

const { signup } = routes.public

const Login = () => {
  return (
    <Background>
      <AccountPrompt
        text={'log in'}
        apiEndpoint={'auth/login'}
        pageHeader={'SIGN IN TO YOUR ACCOUNT'}
        linkText={'SIGN UP FOR AN ACCOUNT'}
        link={signup}
      />
    </Background>
  )
}

export default Login
