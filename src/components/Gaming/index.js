import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header/index'
import SideBar from '../SideBar'
import GamingVideoItem from '../GamingVideoItem'
import ActiveMenuThemeSavedVideosContext from '../../Context/ActiveMenuThemeSavedVideosContext'
import {
  MainContainer,
  SectionsList,
  GamingVideosContainer,
  GamingHeaderContainer,
  IconContainer,
  GamingHeader,
  LoadingView,
  FailureButton,
  FailureContainer,
  FailureDescription,
  FailureHeading,
  FailureImage,
  GamingVideosUnOrderList,
} from './gamingStyled'

const apiConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    gamingVideos: [],
    apiCurrentStatus: apiConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({
      apiCurrentStatus: apiConstants.loading,
    })
    const gamingVideosApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(gamingVideosApiUrl, options)
    if (response.ok) {
      const data = await response.json()
      // console.log(data.videos)
      const updatedData = data.videos.map(vid => ({
        id: vid.id,
        thumbNailUrl: vid.thumbnail_url,
        title: vid.title,
        viewCount: vid.view_count,
      }))
      // console.log(updatedData)
      this.setState({
        gamingVideos: updatedData,
        apiCurrentStatus: apiConstants.success,
      })
    } else {
      this.setState({
        apiCurrentStatus: apiConstants.failure,
      })
    }
  }

  loadingView = () => (
    <ActiveMenuThemeSavedVideosContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <LoadingView>
            <div className="loader-container" data-testid="loader">
              <Loader
                type="ThreeDots"
                color={isDark ? '#ffffff' : '#0f0f0f'}
                height="50"
                width="50"
              />
            </div>
          </LoadingView>
        )
      }}
    </ActiveMenuThemeSavedVideosContext.Consumer>
  )

  failureView = () => (
    <ActiveMenuThemeSavedVideosContext.Consumer>
      {value => {
        const {isDark} = value
        const color = isDark ? 'dark' : 'light'
        return (
          <FailureContainer>
            <FailureImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
              alt="failure view"
            />
            <FailureHeading color={color}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription color={color}>
              We are having some trouble to complete your request.
            </FailureDescription>
            <FailureDescription color={color}>
              Please try again.
            </FailureDescription>
            <FailureButton type="button" onClick={this.getHomeRouteDetails()}>
              Retry
            </FailureButton>
          </FailureContainer>
        )
      }}
    </ActiveMenuThemeSavedVideosContext.Consumer>
  )

  successView = () => {
    const {gamingVideos} = this.state
    return (
      <GamingVideosUnOrderList>
        {gamingVideos.map(video => (
          <GamingVideoItem key={video.id} details={video} />
        ))}
      </GamingVideosUnOrderList>
    )
  }

  renderView = () => {
    const {apiCurrentStatus} = this.state
    switch (apiCurrentStatus) {
      case apiConstants.loading:
        return this.loadingView()
      case apiConstants.success:
        return this.successView()
      case apiConstants.failure:
        return this.failureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ActiveMenuThemeSavedVideosContext.Consumer>
        {value => {
          const {isDark} = value
          const bgColor = isDark ? 'dark' : 'light'
          return (
            <>
              <Header />
              <MainContainer>
                <SectionsList>
                  <SideBar />
                </SectionsList>
                <GamingVideosContainer bgColor={bgColor}>
                  <GamingHeaderContainer bgColor={bgColor}>
                    <IconContainer bgColor={bgColor}>
                      <SiYoutubegaming size={40} color="#ff0b37" />
                    </IconContainer>
                    <GamingHeader bgColor={bgColor}>Gaming</GamingHeader>
                  </GamingHeaderContainer>
                  {this.renderView()}
                </GamingVideosContainer>
              </MainContainer>
            </>
          )
        }}
      </ActiveMenuThemeSavedVideosContext.Consumer>
    )
  }
}
export default Gaming
