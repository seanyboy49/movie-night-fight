import { useState } from 'react'

import { useConfiguration } from '../../providers/Configuration'
import { authFetch } from '../../auth'

export const useTurns = () => {
  const { apiUrl } = useConfiguration()
  const [houseTurns, setHouseTurns] = useState()
  const [isLoading, setIsLoading] = useState(false)

  async function getHouseTurns(houseId) {
    setIsLoading(true)
    try {
      const response = await authFetch(`${apiUrl}/houses/${houseId}/turns`)
      const data = await response.json()
      setHouseTurns(data)
      setIsLoading(false)
    } catch (error) {
      console.log('error', error)
      setIsLoading(false)
    }
  }
  return { getHouseTurns, houseTurns, isLoading }
}
