import styled from 'styled-components'

export const LinkItem = styled.li`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: transparent;
  margin-right: 10px;
  margin-left: 0px;
  text-decoration: none;
`
export const ThumbNailImage = styled.img`
  height: 160px;
  width: 100%;
`
export const VideoDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  margin-top: 10px;
`
export const ChannelImage = styled.img`
  height: 60px;
  width: 50px;
`
export const VideoDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  margin: 0px 10px 0px;
`
export const VideoTitle = styled.h1`
  color: ${props => (props.color === 'dark' ? '#f8fafc' : '#231f20')};
  font-family: 'Roboto';
  font-size: 14px;
`
export const ChannelName = styled.p`
  color: #616e7c;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 600;
  margin-top: 2px;
  margin-bottom: 0px;
`
export const ViewsPublishContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 140px;
  margin: 0px;
  padding: 0px;
  list-style-type: none;
`
export const listWithDisc = styled.li`
  list-style-type: disc;
  margin-left: 14px;
`

export const ViewCount = styled.p`
  color: #616e7c;
  font-size: 12px;
  font-family: 'Roboto';
  margin: 3px;
`
export const YearsAgo = styled.p`
  color: #616e7c;
  font-size: 12px;
  font-family: 'Roboto';
`
