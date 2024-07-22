import {Component} from 'react'
import {RiMenuAddLine} from 'react-icons/ri'

import Header from '../Header'
import SideBar from '../SideBar'
import TrendingVideoItem from '../TrendingVideoItem'
import ActiveMenuThemeSavedVideosContext from '../../Context/ActiveMenuThemeSavedVideosContext'
import {
  MainContainer,
  TrendingContentContainer,
  SectionsList,
  TrendingDetailsContainer,
  TrendingHeaderContainer,
  IconContainer,
  TrendingHeader,
  TrendingVideosUnOrderList,
  NoSavedVideosContainer,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosDescription,
  SavedVideosContainer,
} from './savedvideosStyled'

class SavedVideos extends Component {
  render() {
    return (
      <ActiveMenuThemeSavedVideosContext.Consumer>
        {value => {
          const {isDark, savedVideosList} = value
          console.log(savedVideosList)
          const bgColor = isDark ? 'dark' : 'light'
          const renderView =
            savedVideosList.length === 0 ? (
              <NoSavedVideosContainer bgColor={bgColor}>
                <NoSavedVideosImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoSavedVideosHeading bgColor={bgColor}>
                  No saved videos found
                </NoSavedVideosHeading>
                <NoSavedVideosDescription bgColor={bgColor}>
                  You can save your videos while watching them
                </NoSavedVideosDescription>
              </NoSavedVideosContainer>
            ) : (
              <SavedVideosContainer>
                <TrendingHeaderContainer bgColor={bgColor}>
                  <IconContainer bgColor={bgColor}>
                    <RiMenuAddLine color="#ff0b37" size={40} />
                  </IconContainer>
                  <TrendingHeader bgColor={bgColor}>
                    Saved Videos
                  </TrendingHeader>
                </TrendingHeaderContainer>
                <TrendingVideosUnOrderList>
                  {savedVideosList.map(video => (
                    <TrendingVideoItem key={video.id} details={video} />
                  ))}
                </TrendingVideosUnOrderList>
              </SavedVideosContainer>
            )
          return (
            <MainContainer data-testid="savedVideos" bgColor={bgColor}>
              <Header />
              <TrendingContentContainer>
                <SectionsList>
                  <SideBar />
                </SectionsList>
                <TrendingDetailsContainer bgColor={bgColor}>
                  {renderView}
                </TrendingDetailsContainer>
              </TrendingContentContainer>
            </MainContainer>
          )
        }}
      </ActiveMenuThemeSavedVideosContext.Consumer>
    )
  }
}
export default SavedVideos
