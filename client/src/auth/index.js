import { createAuthProvider } from 'react-token-auth'

import config from '../config'

const { apiUrl } = config

export const [useAuth, authFetch, login, logout] = createAuthProvider({
  onUpdateToken: async (oldToken) => {
    const res = await fetch(`${apiUrl}/auth/refresh`, {
      method: 'POST',
      body: oldToken,
    })
    const data = await res.json()

    return Promise.resolve(data['access_token'])
  },
})
