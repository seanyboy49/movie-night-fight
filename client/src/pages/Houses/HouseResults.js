import React from 'react'
import { Link } from 'react-router-dom'

import { ResultLi, ResultUl } from '../../styles/SearchBar'

const HouseResults = ({ searchHouseResult }) => {
  return (
    <ResultUl>
      {searchHouseResult.map((houseResult) => {
        const housePath = `/houses/${houseResult.name}`.replace(/\s+/g, '')
        const location = {
          pathname: housePath,
          state: houseResult,
        }
        return (
          <Link key={houseResult.id} to={location}>
            <ResultLi>{houseResult.name}</ResultLi>
          </Link>
        )
      })}
    </ResultUl>
  )
}

export default HouseResults
