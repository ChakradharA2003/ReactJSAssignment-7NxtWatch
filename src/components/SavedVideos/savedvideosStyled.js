import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: ${props =>
    props.bgColor === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  display: flex;
  flex-direction: column;
`
export const TrendingContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
`
export const SectionsList = styled.div`
  width: 30%;
  height: 100vh;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    width: 0%;
  }
`
export const TrendingDetailsContainer = styled.div`
  background-color: ${props =>
    props.bgColor === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    width: 100%;
  }
`
export const TrendingHeaderContainer = styled.div`
  background-color: ${props =>
    props.bgColor === 'dark' ? '#212121' : '#ebebeb'};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 80px 15px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    padding: 10px 20px 10px;
  }
`
export const IconContainer = styled.div`
  background-color: ${props =>
    props.bgColor === 'dark' ? '#0f0f0f' : '#d7dfe9'};
  height: 70px;
  width: 70px;
  border-radius: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    height: 35px;
    width: 35px;
    border-radius: 25px;
  }
`
export const TrendingHeader = styled.h1`
  color: ${props => (props.bgColor === 'dark' ? '#ffffff' : '#212121')};
  font-family: 'Roboto';
  font-size: 35px;
  font-weight: 500;
  margin-left: 20px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    font-size: 20px;
  }
`
export const LoadingView = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TrendingVideosUnOrderList = styled.ul`
  list-style-type: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    padding: 5px;
  }
`
export const NoSavedVideosContainer = styled.div`
  background-color: ${props =>
    props.bgColor === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`
export const NoSavedVideosImage = styled.img`
  height: 400px;
  width: 400px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    height: 250px;
    width: 250px;
  }
`
export const NoSavedVideosHeading = styled.h1`
  color: ${props => (props.bgColor === 'dark' ? '#ffffff' : '#0f0f0f')};
  font-size: 35px;
  font-weight: 600;
`
export const NoSavedVideosDescription = styled.p`
  color: ${props => (props.bgColor === 'dark' ? '#ffffff' : '#475569')};
  font-size: 20px;
`
