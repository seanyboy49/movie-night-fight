import React, { useContext, useState } from 'react'

const HouseContext = React.createContext()

export const useHouse = () => {
  return useContext(HouseContext) || {}
}

const HouseProvider = ({ children, value }) => {
  const [currentHouse, setCurrentHouse] = useState()
  return (
    <HouseContext.Provider value={(currentHouse, setCurrentHouse)}>
      {children}
    </HouseContext.Provider>
  )
}

export default HouseProvider
