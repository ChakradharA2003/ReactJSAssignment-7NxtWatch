import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const SectionsList = styled.div`
  width: 30%;
  height: 100vh;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    width: 0%;
  }
`
export const GamingVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  background-color: #f9f9f9;
  width: 70%;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    width: 100%;
  }
`
export const GamingHeaderContainer = styled.div`
  background-color: #ebebeb;
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
  background-color: #d7dfe9;
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
export const GamingHeader = styled.h1`
  color: #212121;
  font-family: 'Roboto';
  font-size: 35px;
  font-weight: 500;
  margin-left: 20px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    font-size: 20px;
  }
`
export const LoadingView = styled.div`
  background-color: #f9f9f9;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  color: #00306e;
  font-family: 'Roboto';
  font-size: 30px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    font-size: 22px;
  }
`
export const FailureDescription = styled.p`
  color: #94a3b8;
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
export const GamingVideosUnOrderList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
`
