import styled from 'styled-components'
import successBannerPath from '../../images/success-banner.svg'

export const NoMovieContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 425px;
  width: 250px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 30px -15px rgba(50, 50, 73, 0.4),
    0 10px 10px -10px rgba(50, 50, 73, 0.3);
`

export const NoMoviePoster = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 192px;
  height: 314px;
  border: 1px solid black;
`

export const SelectedMovieContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 100%;
`
export const MovieDetailContainer = styled.div`
  background-color: white;
  width: 252px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 15px 0px;
  border-radius: 5px;
  position: relative;
`

export const MovieTitle = styled.p`
  font-size: 25px;
  margin: 5px 0 0 0;
  text-align: center;
`

export const SuccessBanner = styled.img.attrs({
  src: `${successBannerPath}`,
  alt: 'success banner',
})`
  position: absolute;
`
