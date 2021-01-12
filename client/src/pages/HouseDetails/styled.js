import styled from 'styled-components'

export const HouseNameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HouseNameText = styled.p`
  font-size: ${(props) => props.size};
  margin: 5px 0px 0px 20px;
`

export const Housemate = styled.li`
  list-style-type: none;
  font-size: 24px;
`
export const HouseMates = styled.ul`
  margin: 5px 20px;
  padding: 0;
`

export const HouseNameData = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 350px;
  flex-direction: column;
`

export const TicketButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  flex-direction: column;
`

export const AssignCurrentHouseButton = styled.div`
  background-color: transparent;
  border: none;
  margin: 20px 0;
  font-size: 26px;
  cursor: pointer;
  padding: 5px;

  &:hover {
    border-bottom: 2px solid black;
  }
`
