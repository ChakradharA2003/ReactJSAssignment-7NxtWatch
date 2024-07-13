import styled from 'styled-components'

export const GamingVideoItemList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 280px;
  padding: 5px;
  margin: 10px;
  text-decoration: none;
  @media screen and (max-width: 576px) and (orientation: portrait) {
    height: 230px;
  }
`
export const VideoThumbNail = styled.img`
  height: 250px;
  width: 180px;
  @media screen and (max-width: 576px) and (orientation: portrait) {
    width: 140px;
    height: 200px;
  }
`
export const GamingVideoTitle = styled.h1`
  color: #475569;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
`
export const GamingVideoViewCount = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 300;
  margin-top: 0px;
`
