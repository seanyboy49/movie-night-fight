import { useState } from 'react'

import { useConfiguration } from '../../providers/Configuration'
import { authFetch } from '../../auth'

export const useTurns = () => {
  const { apiUrl } = useConfiguration()
  const [houseTurns, setHouseTurns] = useState()
  const [isLoading, setIsLoading] = useState(false)

  async function getHouseTurns(houseId) {
    console.log('inside get house turns')
    setIsLoading(true)
    try {
      const response = await authFetch(`${apiUrl}/houses/${houseId}/turns`)
      const data = await response.json()
      console.log('data', data)
      setHouseTurns(data)
      setIsLoading(false)
    } catch (error) {
      console.log('error', error)
      setIsLoading(false)
    }
  }
  return { getHouseTurns, houseTurns, isLoading }
}
