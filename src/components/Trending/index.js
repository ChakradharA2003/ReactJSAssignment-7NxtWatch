import {Component} from 'react'
import {AiFillFire} from 'react-icons/ai'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header/index'
import SideBar from '../SideBar'
import TrendingVideoItem from '../TrendingVideoItem/index'
import ActiveMenuThemeSavedVideosContext from '../../Context/ActiveMenuThemeSavedVideosContext'
import {
  MainContainer,
  TrendingContentContainer,
  SectionsList,
  TrendingDetailsContainer,
  TrendingHeaderContainer,
  IconContainer,
  TrendingHeader,
  LoadingView,
  TrendingVideosUnOrderList,
  FailureContainer,
  FailureButton,
  FailureDescription,
  FailureHeading,
  FailureImage,
} from './trendingStyle'

const apiConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    trendingVideos: [],
    apiCurrentStatus: apiConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideosDetails()
  }

  getTrendingVideosDetails = async () => {
    this.setState({
      apiCurrentStatus: apiConstants.loading,
    })
    const trendingVideosApiUrl = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(trendingVideosApiUrl, options)
    if (response.ok) {
      const data = await response.json()
      // console.log(data.videos)
      const updatedDetails = data.videos.map(vid => ({
        id: vid.id,
        channel: {
          name: vid.channel.name,
          profileImageUrl: vid.channel.profile_image_url,
        },
        publishedAt: vid.published_at,
        thumbNailUrl: vid.thumbnail_url,
        title: vid.title,
        viewCount: vid.view_count,
      }))
      // console.log(updatedDetails)
      this.setState({
        apiCurrentStatus: apiConstants.success,
        trendingVideos: updatedDetails,
      })
    } else {
      this.setState({apiCurrentStatus: apiConstants.failure})
    }
  }

  loadingView = () => (
    <ActiveMenuThemeSavedVideosContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <LoadingView data-testid="loader">
            <div className="loader-container">
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

  successView = () => {
    const {trendingVideos} = this.state
    // console.log(trendingVideos)
    return (
      <TrendingVideosUnOrderList>
        {trendingVideos.map(video => (
          <TrendingVideoItem key={video.id} details={video} />
        ))}
      </TrendingVideosUnOrderList>
    )
  }

  failureView = () => (
    <ActiveMenuThemeSavedVideosContext.Consumer>
      {value => {
        const {isDark} = value
        const color = isDark ? 'dark' : 'light'
        const failureImage = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureContainer>
            <FailureImage src={failureImage} alt="failure view" />
            <FailureHeading color={color}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription color={color}>
              We are having some trouble to complete your request.
            </FailureDescription>
            <FailureDescription color={color}>
              Please try again.
            </FailureDescription>
            <FailureButton type="button" onClick={this.getHomeRouteDetails}>
              Retry
            </FailureButton>
          </FailureContainer>
        )
      }}
    </ActiveMenuThemeSavedVideosContext.Consumer>
  )

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
            <MainContainer data-testid="trending" bgColor={bgColor}>
              <Header />
              <TrendingContentContainer>
                <SectionsList>
                  <SideBar />
                </SectionsList>
                <TrendingDetailsContainer bgColor={bgColor}>
                  <TrendingHeaderContainer bgColor={bgColor}>
                    <IconContainer bgColor={bgColor}>
                      <AiFillFire color="#ff0b37" size={40} />
                    </IconContainer>
                    <TrendingHeader as="h1" bgColor={bgColor}>
                      Trending
                    </TrendingHeader>
                  </TrendingHeaderContainer>
                  {this.renderView()}
                </TrendingDetailsContainer>
              </TrendingContentContainer>
            </MainContainer>
          )
        }}
      </ActiveMenuThemeSavedVideosContext.Consumer>
    )
  }
}
export default Trending
