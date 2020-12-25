import React from 'react'

import {
  SectionContainer,
  Text,
  Header,
  TextContainer,
  HomePosterContainer,
} from './styled'
import { PosterContainer } from '../../styles/Background'
import PosterStack from '../../components/PosterStack'
import cocoImagePath from '../../images/movie-posters/coco.jpg'
import callmeImagePath from '../../images/movie-posters/call-me-by-your-name.jpg'
import wonderWomanImagePath from '../../images/movie-posters/wonder-woman.jpg'
import crazyRichAsiansImagePath from '../../images/movie-posters/crazy-rich-asians.jpg'
import endgameImagePath from '../../images/movie-posters/endgame.jpg'
import jojoImagePath from '../../images/movie-posters/jojo-rabbit.jpg'

const movies = [
  {
    poster_url: callmeImagePath,
    name: 'Call Me By Your Name',
  },
  { poster_url: cocoImagePath, name: 'Coco' },
  { poster_url: crazyRichAsiansImagePath, name: 'Crazy Rich Asians' },
  { poster_url: endgameImagePath, name: 'Avenger: Endgame' },
  { poster_url: jojoImagePath, name: 'JoJo Rabbit' },
  { poster_url: wonderWomanImagePath, name: 'Wonder Woman' },
]

const Solution1 = () => {
  return (
    <SectionContainer id="solution1">
      <TextContainer>
        <Header>MOVIE NIGHT FIGHT</Header>
        <Text margin={'0 10%'}>
          curates your movie watch list for when it’s your turn to choose.
        </Text>
      </TextContainer>
      <HomePosterContainer>
        <PosterContainer>
          <PosterStack movies={movies} />
        </PosterContainer>
      </HomePosterContainer>
    </SectionContainer>
  )
}

export default Solution1
