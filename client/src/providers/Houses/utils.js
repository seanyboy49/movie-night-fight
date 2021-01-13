export const determineCurrentHouse = (allUserHouses, storageCurrentHouse) => {
  if (allUserHouses.length === 0) {
    return undefined
  }

  const houseIDs = allUserHouses.map((house) => house.id)
  const firstHouse = allUserHouses ? allUserHouses[0] : undefined

  if (!storageCurrentHouse) {
    return firstHouse
  }

  if (houseIDs.includes(storageCurrentHouse.id)) {
    return storageCurrentHouse
  } else {
    return firstHouse
  }
}
