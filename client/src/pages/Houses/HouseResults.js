import React from 'react'

import { ResultLi, ResultUl } from '../../styles/SearchBar'
import { HouseRedirectLink } from './styled'

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
          <HouseRedirectLink color={'black'} key={houseResult.id} to={location}>
            <ResultLi>{houseResult.name}</ResultLi>
          </HouseRedirectLink>
        )
      })}
    </ResultUl>
  )
}

export default HouseResults
