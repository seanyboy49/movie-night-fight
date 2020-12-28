import { createAuthProvider } from 'react-token-auth'

import config from '../config'

const { apiUrl } = config

export const [useAuth, authFetch, login, logout] = createAuthProvider({
  accessTokenKey: 'access_token',
  onUpdateToken: (token) => {
    fetch(`${apiUrl}/auth/refresh`, {
      method: 'POST',
      body: token.access_token,
    }).then((r) => r.json())
  },
})
