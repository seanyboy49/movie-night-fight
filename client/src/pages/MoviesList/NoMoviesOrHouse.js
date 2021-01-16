import React from 'react'

import { NoMovieContainer, NoMoviePoster } from './styled'
import { BebasText } from '../../styles/Text'
import confused from '../../images/confused.svg'
import TicketLink from './TicketLink'

const NoMoviesOrHouse = ({ text, redirectTo, Add }) => {
  return (
    <NoMovieContainer>
      <NoMoviePoster>
        <BebasText size={'36px'}>
          You haven't {text[0]} any {text[1]} yet
        </BebasText>
        <img src={confused} alt="rain" width="65" />
      </NoMoviePoster>
      <TicketLink text={`Add a ${text[1]}`} toLink={redirectTo} />
    </NoMovieContainer>
  )
}

export default NoMoviesOrHouse