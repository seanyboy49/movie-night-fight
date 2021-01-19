import styled from 'styled-components'

import slipImg from '../../images/slip.svg'

export const Container = styled.div`
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  min-height: 80vh;
`

export const SlipImage = styled.img.attrs({
  src: `${slipImg}`,
  alt: 'slip',
})`
  margin: 2rem 0;
`
