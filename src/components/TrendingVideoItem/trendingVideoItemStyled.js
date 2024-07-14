import styled from 'styled-components'

export const VideoItemList = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 15px;
  margin: 10px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5px;
    width: 100%;
    margin-left: 0px;
  }
`
export const ThumbNailImage = styled.img`
  height: 150px;
  width: 250px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    width: 100%;
    height: 200px;
  }
`
export const VideoItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 12px;
`
export const Title = styled.h1`
  color: ${props => (props.color === 'dark' ? '#ffffff' : '#212121')};
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 20px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    font-size: 15px;
  }
`
export const ChannelName = styled.p`
  color: ${props => (props.color === 'dark' ? '#e2e8f0' : '#64748b')};
  font-family: 'Roboto';
  font-size: 15px;
  margin-top: 1px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    margin: 1px 8px 1px;
  }
`
export const ViewsAndPublishedDetailsUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0px;
  margin-left: 0px;
`
export const PubAndViews = styled.p`
  color: ${props => (props.color === 'dark' ? '#e2e8f0' : '#64748b')};
  font-family: 'Roboto';
  font-size: 12px;
`
export const PublishedList = styled.li`
  margin-left: 25px;
  list-style-type: disc;
`
export const DesktopView = styled.div`
  display: flex;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    display: none;
  }
`
export const MobileView = styled.div`
  display: none;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    display: flex;
  }
`
export const MobileChannelDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 3px;
`
export const ChannelImage = styled.img`
  height: 50px;
  width: 50px;
`
export const MobileViewVideoDetails = styled.ul`
  list-style-type: disc;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-right: auto;
  margin-left: 0px;
`
export const MobileNameList = styled.li`
  list-style-type: none;
`
