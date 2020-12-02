import React, { useState } from 'react'

import AccountPrompt from '../../components/AccountPrompt'
import { Background } from '../../styles/Background'
import Toast from '../../components/Toast'

const Login = () => {
  return (
    <Background>
      <AccountPrompt
        text={'log in'}
        apiEndpoint={'login'}
        pageHeader={'SIGN IN TO YOUR ACCOUNT'}
        linkText={'SIGN UP FOR AN ACCOUNT'}
        link={'/signup'}
      />
      <Toast />
    </Background>
  )
}

export default Login
