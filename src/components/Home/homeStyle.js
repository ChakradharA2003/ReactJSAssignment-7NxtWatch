import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0px;
`
export const SectionsList = styled.div`
  width: 30%;
  height: 100vh;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    display: none;
  }
`
export const HomeContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  padding: 0px 0px 20px;
  margin: 0px;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: ${props => (props.visible ? 'flex' : 'none')};
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 30px 15px 30px;
`
export const BannerDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 450px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    width: 300px;
  }
`
export const Banner = styled.img`
  height: 40px;
  width: 140px;
`
export const BannerDescription = styled.p`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 22px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    font-size: 16px;
  }
`
export const GetButton = styled.button`
  color: #1e293b;
  border: 1px solid #1e293b;
  text-align: center;
  padding: 10px;
  font-family: 'Roboto';
  font-weight: bold;
  background-color: transparent;
`
export const BannerCloseButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  align-self: flex-start;
  cursor: pointer;
`
export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  margin-left: 40px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    margin-left: 15px;
  }
`
export const SearchInput = styled.input`
  width: 330px;
  padding: 8px;
  margin-top: 10px;
  outline: none;
  border-color: ${props =>
    props.searchBgColor === 'dark' ? '#909090' : '#0f0f0f'}
  background-color: ${props =>
    props.searchBgColor === 'dark' ? '#0f0f0f' : '#ffffff'};
  color: ${props => (props.searchBgColor === 'dark' ? '#ffffff' : '#0f0f0f')};
  @media screen and (max-width: 767px) and (orientation: portrait) {
    width: 70%;
  }
`
export const SearchButton = styled.button`
  background-color: ${props =>
    props.searchButColor === 'dark' ? '#909090' : '#cccccc'}
  padding: 7px;
  margin-top: 10px;
  height: 36px;
  border-width: 1px;
  padding: 2px 25px 2px;
  align-self: center;
  cursor: pointer;
`
export const SearchVideosContainer = styled.div`
  background-color: ${props =>
    props.bgColor === 'dark' ? '#0f0f0f' : '#ebebeb'};
  display: flex;
  flex-direction: column;
  // align-items: flex-start;
  padding: 20px 5px 20px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    padding: 10px 2px 10px;
  }
`
export const VideosContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-left: 0px;
`
export const FailureContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImage = styled.img`
  height: 300px;
  width: 300px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    height: 180px;
    width: 180px;
  }
`
export const FailureHeading = styled.h1`
  color: ${props => (props.bgColor === 'dark' ? '#ffffff' : '#00306e')};
  font-family: 'Roboto';
  font-size: 30px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    font-size: 22px;
  }
`
export const FailureDescription = styled.p`
  color: ${props => (props.bgColor === 'dark' ? '#e2e8f0' : '#94a3b8')};
  font-family: 'Roboto';
  font-size: 20px;
  margin-top: 0px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    font-size: 12px;
  }
`
export const FailureButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  cursor: pointer;
  border-width: 0px;
  border-radius: 10px;
  padding: 15px;
`
export const LoadingContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoResultsContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoResultsImage = styled.img`
  height: 500px;
  width: 500px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    height: 300px;
    width: 300px;
  }
`

export const NoResultsHeading = styled.h1`
  color: ${props => (props.headingColor === 'dark' ? '#f8fafc' : '#00306e')};
  text-align: center;
`
export const NoResultsDescription = styled.p`
  color: ${props => (props.desColor === 'dark' ? '#e2e8f0' : '#94a3b8')};
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`
