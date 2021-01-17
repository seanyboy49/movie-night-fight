import React from 'react'
import PropTypes from 'prop-types'

import { NoMovieContainer, NoMoviePoster } from './styled'
import { BebasText } from '../../styles/Text'
import confused from '../../images/confused.svg'
import TicketLink from './TicketLink'

const NoMoviesOrHouse = ({ text, redirectTo }) => {
  return (
    <NoMovieContainer>
      <NoMoviePoster>
        <BebasText size={'36px'}>
          You haven't {text[0]} any {text[1]} yet
        </BebasText>
        <img src={confused} alt="rain" width="65" />
      </NoMoviePoster>
      <TicketLink text={`Add ${text[1]}`} toLink={redirectTo} />
    </NoMovieContainer>
  )
}

NoMoviesOrHouse.propTypes = {
  text: PropTypes.array.isRequired,
  redirectTo: PropTypes.string.isRequired,
}

export default NoMoviesOrHouse
