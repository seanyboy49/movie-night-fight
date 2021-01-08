import React from 'react'

import { ResultLi, ResultUl } from '../../styles/SearchBar'

const HouseResults = ({ searchHouseResult }) => {
  return (
    <ResultUl>
      {searchHouseResult.map((houseResult) => {
        return <ResultLi key={houseResult.id}>{houseResult.name}</ResultLi>
      })}
    </ResultUl>
  )
}

export default HouseResults
