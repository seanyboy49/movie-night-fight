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
export const TurnsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const TurnsBoard = styled.div`
  width: 324px;
  background-color: #d70808;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const InfoContainer = styled.div`
  width: 288px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 11px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: Bevan;
  font-size: 18px;
  margin: 15px 0;
`

export const Categories = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Turn = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Bebas Neue;
  font-size: 18px;
  border-top: 1px solid #e5e5e5;
`

export const User = styled.p`
  margin: 10px 5px;
`

export const Title = styled.p`
  margin: 10px 5px;
  overflow-x: scroll;
  user-select: none;
  will-change: transform;
  white-space: nowrap;
  width: 60%;
  text-align: right;
`
