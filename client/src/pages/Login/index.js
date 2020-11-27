import React, { useState } from 'react'

import AccountPrompt from '../../components/AccountPrompt'
import { Background } from '../../styles/Background'

const Login = () => {
  return (
    <Background>
      <AccountPrompt
        text={'log in'}
        page={'login'}
        pageHeader={'SIGN IN TO YOUR ACCOUNT'}
        pageText={'SIGN UP FOR AN ACCOUNT'}
        link={'signup'}
      />
    </Background>
  )
}

export default Login
