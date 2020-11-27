import React, { useState } from 'react'

import AccountPrompt from '../../components/AccountPrompt'
import { Background } from '../../styles/Background'

const Signup = () => {
  return (
    <Background>
      <AccountPrompt
        text={'sign up'}
        page={'signup'}
        pageHeader={'create an account'}
        pageText={'I have an account'}
      />
    </Background>
  )
}

export default Signup
