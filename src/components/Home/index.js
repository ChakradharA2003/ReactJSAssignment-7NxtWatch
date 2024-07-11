import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {IoClose} from 'react-icons/io5'
import {GoSearch} from 'react-icons/go'

import Header from '../Header'
import VideoItem from '../VideoItem'

import {
  HomeContainer,
  SectionsList,
  HomeContentContainer,
  BannerContainer,
  BannerDetailsContainer,
  Banner,
  BannerDescription,
  GetButton,
  BannerCloseButton,
  SearchBarContainer,
  SearchInput,
  SearchButton,
  SearchVideosContainer,
  VideosContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  FailureButton,
  LoadingContainer,
} from './homeStyle'

const apiConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    bannerVisible: true,
    apiCurrentStatus: apiConstants.initial,
    searchValue: '',
    searching: '',
    videos: [],
  }

  componentDidMount() {
    this.getHomeRouteDetails()
  }

  getHomeRouteDetails = async () => {
    this.setState({apiCurrentStatus: apiConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const {searchValue} = this.state
    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchValue}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(homeVideosApiUrl, options)
    const data = await response.json()
    // console.log(data)
    if (response.ok) {
      const updatedData = data.videos.map(video => ({
        id: video.id,
        publishedAt: video.published_at,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
        },
      }))
      // console.log(updatedData)
      this.setState({
        videos: updatedData,
        apiCurrentStatus: apiConstants.success,
      })
    } else {
      this.setState({apiCurrentStatus: apiConstants.failure})
    }
  }

  onClickCloseBanner = () => {
    this.setState({bannerVisible: false})
  }

  loadingView = () => (
    <LoadingContainer>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      </div>
    </LoadingContainer>
  )

  failureView = () => (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureDescription>
        We are having some trouble to complete your request.
      </FailureDescription>
      <FailureDescription>Please try again.</FailureDescription>
      <FailureButton type="button" onClick={this.getHomeRouteDetails()}>
        Retry
      </FailureButton>
    </FailureContainer>
  )

  successView = () => {
    const {videos} = this.state
    return (
      <VideosContainer>
        {videos.map(video => (
          <VideoItem key={video.id} videoDetails={video} />
        ))}
      </VideosContainer>
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

  onChangeSearchInput = event => {
    this.setState({
      searching: event.target.value,
    })
  }

  onSearchVideo = async () => {
    const {searching} = this.state
    await this.setState({
      searchValue: searching,
    })
    await this.getHomeRouteDetails()
  }

  render() {
    const {bannerVisible, searching} = this.state
    return (
      <>
        <Header />
        <HomeContainer>
          <SectionsList>.</SectionsList>
          <HomeContentContainer>
            <BannerContainer visible={bannerVisible}>
              <BannerDetailsContainer>
                <Banner
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="nxt watch logo"
                />
                <BannerDescription>
                  Buy Nxt Watch Premium prepaid plans with UPI
                </BannerDescription>
                <GetButton type="button">GET IT NOW</GetButton>
              </BannerDetailsContainer>
              <BannerCloseButton
                type="button"
                onClick={this.onClickCloseBanner}
              >
                <IoClose size={25} />
              </BannerCloseButton>
            </BannerContainer>

            <SearchVideosContainer>
              <SearchBarContainer>
                <SearchInput
                  type="search"
                  placeholder="Search"
                  value={searching}
                  onChange={this.onChangeSearchInput}
                />
                <SearchButton
                  as="button"
                  type="button"
                  onClick={this.onSearchVideo}
                >
                  <GoSearch size={18} />
                </SearchButton>
              </SearchBarContainer>
              {this.renderView()}
            </SearchVideosContainer>
          </HomeContentContainer>
        </HomeContainer>
      </>
    )
  }
}
export default Home
