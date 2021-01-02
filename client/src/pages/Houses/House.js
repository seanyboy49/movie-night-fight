import React from 'react'

import { BebasText } from '../../styles/Text'
import { HouseContainer } from './styled'

const House = ({ name, members }) => {
  const memberCount = members.length
  return (
    <HouseContainer>
      <BebasText align={'left'} size={'30px'}>
        {name}
      </BebasText>
      <BebasText size={'18px'}>
        {memberCount} housemate(s) have already joined
      </BebasText>
      <div>
        {members.map((member) => {
          return (
            <BebasText
              margin={'5px 0'}
              size={'24px'}
              align={'left'}
              key={member.user}
            >
              {member.user}
            </BebasText>
          )
        })}
      </div>
    </HouseContainer>
  )
}

export default House
