import { useState } from 'react'
import { useConfiguration } from '../../providers/Configuration'
import { authFetch } from '../../auth'

export const useTurns = () => {
  const { apiUrl } = useConfiguration()
  const [houseTurns, setHouseTurns] = useState()

  async function getHouseTurns(houseId) {
    try {
      const response = await authFetch(`${apiUrl}/houses/${houseId}/turns`)
      const data = await response.json()
      setHouseTurns(data)
    } catch (error) {
      console.log('error', error)
    }
  }
  return { getHouseTurns, houseTurns }
}
