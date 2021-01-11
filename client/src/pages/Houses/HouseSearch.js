import React, { useState, useCallback } from 'react'
import debounce from 'lodash.debounce'

import { BebasText } from '../../styles/Text'
import { HousesComponentContainer } from './styled'
import {
  SearchBar,
  SearchInput,
  SearchImg,
  ClearImg,
  Button,
} from '../../styles/SearchBar'
import { useConfiguration } from '../../providers/Configuration'
import { authFetch } from '../../auth'
import HouseResults from './HouseResults'
import CreateHouse from './CreateHouse'

const HouseSearch = () => {
  const { apiUrl } = useConfiguration()
  const [searchHouseResult, setSearchHouseResult] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isHouseNameAvailable, setisHouseNameAvailable] = useState(true)

  const searchHouses = async (currentValue) => {
    if (!currentValue) {
      setisHouseNameAvailable(true)
      setSearchHouseResult([])
      return
    }

    try {
      const response = await authFetch(
        `${apiUrl}/houses?search=${currentValue}`
      )
      const data = await response.json()
      const houseNameAvailable = data.some(
        (result) => result.name.toLowerCase() === currentValue.toLowerCase()
      )
      setisHouseNameAvailable(houseNameAvailable)
      setSearchHouseResult(data)
    } catch (error) {
      console.log('error', error)
    }
  }

  const debouncedSearch = useCallback(
    debounce((currentValue) => searchHouses(currentValue), 1000),
    []
  )

  const handleChange = (e) => {
    setInputValue(e.target.value)
    debouncedSearch(e.target.value)
  }

  function clearInput() {
    setInputValue('')
    setSearchHouseResult([])
    setisHouseNameAvailable(true)
  }

  return (
    <HousesComponentContainer>
      <BebasText size={'30px'}>Search for Houses or create one</BebasText>
      <SearchBar>
        <SearchImg />
        <SearchInput type="text" value={inputValue} onChange={handleChange} />
        <Button onClick={clearInput}>
          <ClearImg />
        </Button>
      </SearchBar>
      <HouseResults searchHouseResult={searchHouseResult} />
      {!isHouseNameAvailable && <CreateHouse inputValue={inputValue} />}
    </HousesComponentContainer>
  )
}

export default HouseSearch
