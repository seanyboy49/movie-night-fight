import React from 'react'

import { SectionContainer, Text, SmallerText, Image } from './styled'
import sampleTable from '../../images/sample-table.svg'
import watching from '../../images/watching.svg'

const Solution2 = () => {
  return (
    <SectionContainer>
      <Text>
        Keep track of whose turn it is to choose and never fight{' '}
        <SmallerText>(about movies) </SmallerText>
        again.
      </Text>
      <Image src={sampleTable} alt="sample user table" />
      <Image src={watching} alt="user watching" />
    </SectionContainer>
  )
}

export default Solution2
