import React from 'react'

import { NoMovieContainer, NoMoviePoster } from './styled'
import { BebasText } from '../../styles/Text'
import noMovie from '../../images/no-movies.svg'
import TicketLink from './TicketLink'

const EmptyMovie = () => {
  return (
    <NoMovieContainer>
      <NoMoviePoster>
        <BebasText size={'36px'}>You haven't added any movies yet</BebasText>
        <img src={noMovie} alt="rain" width="65" />
      </NoMoviePoster>
      <TicketLink text={'Add a movie'} toLink={'/'} />
    </NoMovieContainer>
  )
}

export default EmptyMovie
