import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div`
  background-color: ${props =>
    props.bgColor === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  display: flex;
  flex-direction: column;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
  width: 100%;
`
export const SectionsList = styled.div`
  width: 30%;
  height: 100vh;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    display: none;
  }
`
export const VideoDetailsSuccessView = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.bgColor === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  padding: 20px;
  width: 100%;
  overflow: auto;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    width: 100%;
  }
`
export const LoadingContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
`
export const VideoDescription = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.bgColor === 'dark' ? '#ffffff' : '#000000')};
`
export const PublishedOpinionDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-left: 0px;
  margin-top: 0px;
  padding: 0px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    margin: 0px;
  }
`
export const PublishedOpinionUnOrderLists = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around
  align-items: center;
  margin: 0px;
  padding: 0px;
`
export const PubOpinionDetails = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 400;
  margin-right: 25px;
`
export const ViewsList = styled.li``
export const PublishedList = styled.li`
  list-style-type: disc;
`
export const Button = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${props => (props.theme === 'Active' ? '#2563eb' : '#64748b')};
  font-family: 'Roboto';
  font-weight: 400;
  margin: 10px;
`
export const HorizontalLine = styled.hr`
  margin: 2px solid #181818;
`
export const ChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 12px;
`
export const ChannelImage = styled.img`
  height: 85px;
  width: 75px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    height: 55px;
    width: 45px;
  }
`
export const ChannelNameSubscribersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 18px;
  margin-top: 0px;
`
export const ChannelName = styled.h1`
  color: ${props => (props.bgColor === 'dark' ? '#ffffff' : '#181818')};
  font-family: 'Roboto';
  font-size: 18px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    font-size: 14px;
  }
`
export const ChannelSubscribersCount = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 14px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    font-size: 12px;
  }
`
export const ChannelVideoDescription = styled.p`
  color: ${props => (props.bgColor === 'dark' ? '#ffffff' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 16px;
  align-self: flex-end;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    font-size: 13px;
  }
`
export const MobileView = styled.div`
  display: none;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    display: block;
    width: 100%;
    height: 100vh;
  }
`
export const DesktopView = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    display: none;
  }
`
export const FailureView = styled.div`
  background-color: #f1f1f1;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImage = styled.img`
  height: 350px;
  width: 350px;
  @media and screen and (max-width: 767px) and (orientation: portrait) {
    height: 200px;
    width: 200px;
  }
`
export const FailureHeading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  @media and screen and (max-width: 767px) and (orientation: portrait) {
    font-size: 16px;
  }
`
export const FailureDescription = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 20px;
  @media and screen and (max-width: 767px) and (orientation: portrait) {
    font-size: 14px;
  }
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  font-family: 'Roboto';
  text-align: center;
  cursor: pointer;
  border-width: 0px;
  border-radius: 8px;
  font-size: 18px;
  padding: 8px 14px 8px;
`
