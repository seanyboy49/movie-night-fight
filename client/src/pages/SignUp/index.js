import React from 'react'

import AccountPrompt from '../../components/AccountPrompt'
import { Background } from '../../styles/Background'
import routes from '../../routes'

const { login } = routes.public

const Signup = () => {
  return (
    <Background>
      <AccountPrompt
        text={'sign up'}
        apiEndpoint={'auth/signup'}
        pageHeader={'create an account'}
        linkText={'I have an account'}
        link={login}
      />
    </Background>
  )
}

export default Signup
