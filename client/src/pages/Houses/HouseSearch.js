import React, { useState, useCallback } from 'react'
import debounce from 'lodash.debounce'

import { BebasText } from '../../styles/Text'
import { HousesComponentContainer } from './styled'
import { SearchBar, SearchInput, SearchImg } from '../../styles/SearchBar'
import { authFetch } from '../../auth'
import { useConfiguration } from '../../providers/Configuration'

const HouseSearch = () => {
  const { apiUrl } = useConfiguration()
  const [houseSearchValue, setHouseSearchValue] = useState('')
  const [houseResults, setHouseResults] = useState([])
  const [isHouseSearchLoading, setIsHouseSearchLoading] = useState(false)

  const searchHouses = async (currentValue) => {
    setIsHouseSearchLoading(true)

    if (!currentValue) {
      setHouseSearchValue([])
      setIsHouseSearchLoading(false)
      return
    }

    try {
      const response = await authFetch(
        `${apiUrl}/houses?search=${houseSearchValue}`
      )
      const data = await response.json()
      console.log('data', data)
      if (data.name) {
        setHouseResults(data)
      }
      setIsHouseSearchLoading(false)
    } catch (error) {
      setIsHouseSearchLoading(false)
      console.log('error', error)
    }
  }

  const debouncedSearchHouses = useCallback(
    debounce((currentHouseValue) => searchHouses(currentHouseValue), 1000),
    []
  )

  const handleChange = (e) => {
    setHouseSearchValue(e.target.value)
    debouncedSearchHouses(e.target.value)
  }

  console.log(houseResults)
  return (
    <HousesComponentContainer>
      <BebasText size={'30px'}>Search for Houses or create one</BebasText>
      <SearchBar>
        <SearchImg />
        <SearchInput
          type="text"
          value={houseSearchValue}
          onChange={handleChange}
        />
      </SearchBar>
    </HousesComponentContainer>
  )
}

export default HouseSearch
