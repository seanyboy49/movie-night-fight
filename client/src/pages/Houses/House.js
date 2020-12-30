import React from 'react'

const House = ({ houses }) => {
  //   const houseMembers = houses[0].users
  //   console.log(houseMembers)
  return (
    <div>
      <p>{houses.name}</p>
      <p>blank housemates have already joined</p>
    </div>
  )
}

export default House
