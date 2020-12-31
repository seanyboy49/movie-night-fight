import React from 'react'

import { NoMovieContainer, NoMoviePoster } from './styled'
import { BebasText } from '../../styles/Text'
import confused from '../../images/confused.svg'
import TicketLink from './TicketLink'

const NoMovies = () => {
  return (
    <NoMovieContainer>
      <NoMoviePoster>
        <BebasText size={'36px'}>You haven't added any movies yet</BebasText>
        <img src={confused} alt="rain" width="65" />
      </NoMoviePoster>
      <TicketLink text={'Add a movie'} toLink={'/'} />
    </NoMovieContainer>
  )
}

export default NoMovies
