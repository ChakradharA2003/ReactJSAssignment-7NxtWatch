import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {RiMenuAddLine} from 'react-icons/ri'
import Loader from 'react-loader-spinner'
import SideBar from '../SideBar'
import Header from '../Header/index'
import ActiveMenuThemeSavedVideosContext from '../../Context/ActiveMenuThemeSavedVideosContext'
import './index.css'
import {
  VideoItemDetailsContainer,
  VideoDetailsContainer,
  SectionsList,
  VideoDetailsSuccessView,
  LoadingContainer,
  VideoDescription,
  PublishedOpinionDetailsContainer,
  PublishedOpinionUnOrderLists,
  PubOpinionDetails,
  ViewsList,
  PublishedList,
  Button,
  HorizontalLine,
  ChannelDetailsContainer,
  ChannelImage,
  ChannelNameSubscribersContainer,
  ChannelName,
  ChannelSubscribersCount,
  ChannelVideoDescription,
  DesktopView,
  MobileView,
  FailureView,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
} from './videoItemDetailsStyle'

const apiConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    apiCurrentStatus: apiConstants.initial,
    videoDetails: {},
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    // console.log(id)
    const videoItemDetailsApiUrl = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(videoItemDetailsApiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedDetails = {
        id: data.video_details.id,
        description: data.video_details.description,
        publishedAt: data.video_details.published_at,
        thumbNailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
      }
      // console.log(updatedDetails)
      this.setState({
        videoDetails: updatedDetails,
        apiCurrentStatus: apiConstants.success,
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
          <LoadingContainer>
            <div className="loader-container" data-testid="loader">
              <Loader
                type="ThreeDots"
                color={isDark ? '#ffffff' : '#0f0f0f'}
                height="50"
                width="50"
              />
            </div>
          </LoadingContainer>
        )
      }}
    </ActiveMenuThemeSavedVideosContext.Consumer>
  )

  onClickedLikeButton = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  onClickedDislikeButton = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  successView = () => {
    const {videoDetails, isLiked, isDisliked} = this.state
    // console.log(videoDetails)
    // console.log(isLiked, isDisliked, isSaved)
    const isLikedActive = isLiked ? 'Active' : 'Not-Active'
    const isDislikedActive = isDisliked ? 'Active' : 'Not-Active'
    const {
      id,
      description,
      publishedAt,
      thumbNailUrl,
      title,
      videoUrl,
      viewCount,
      channel,
    } = videoDetails
    const {name, profileImageUrl, subscriberCount} = channel
    const publishedAgo = formatDistanceToNow(new Date(publishedAt))
    const publishedSplit = publishedAgo.split(' ')
    // console.log(publishedAt)
    const daysAgo = publishedSplit.splice(1, 1).join(' ')
    const savingVideoDetails = {
      id,
      title,
      thumbNailUrl,
      channel,
      viewCount,
      publishedAt: daysAgo,
    }
    return (
      <ActiveMenuThemeSavedVideosContext.Consumer>
        {value => {
          const {isDark, savedVideosList, clickedSave} = value
          const bgColor = isDark ? 'dark' : 'light'
          const isSaved = savedVideosList.find(video => video.id === id)
          // const isSaved = true
          const isSavedActive = isSaved !== undefined ? 'Active' : 'Not-Active'
          const saveButtonText = isSaved !== undefined ? 'Saved' : 'Save'
          return (
            <>
              <DesktopView>
                <VideoDetailsSuccessView bgColor={bgColor}>
                  <ReactPlayer
                    url={videoUrl}
                    controls
                    width="100%"
                    height="500px"
                    light={<img src={thumbNailUrl} alt="video thumbnail" />}
                    className="react-player-style"
                  />
                  <VideoDescription bgColor={bgColor}>{title}</VideoDescription>
                  <PublishedOpinionDetailsContainer>
                    <PublishedOpinionUnOrderLists>
                      <ViewsList>
                        <PubOpinionDetails>{viewCount} Views</PubOpinionDetails>
                      </ViewsList>
                      <PublishedList>
                        <PubOpinionDetails>
                          {daysAgo} Years Ago
                        </PubOpinionDetails>
                      </PublishedList>
                    </PublishedOpinionUnOrderLists>
                    <PublishedOpinionUnOrderLists>
                      <li>
                        <Button
                          bgColor={bgColor}
                          type="button"
                          theme={isLikedActive}
                          onClick={this.onClickedLikeButton}
                        >
                          <BiLike size={20} /> Like
                        </Button>
                      </li>
                      <li>
                        <Button
                          bgColor={bgColor}
                          type="button"
                          theme={isDislikedActive}
                          onClick={this.onClickedDislikeButton}
                        >
                          <BiDislike size={20} /> Dislike
                        </Button>
                      </li>
                      <li>
                        <Button
                          bgColor={bgColor}
                          type="button"
                          theme={isSavedActive}
                          onClick={() => clickedSave(savingVideoDetails)}
                        >
                          <RiMenuAddLine size={20} /> {saveButtonText}
                        </Button>
                      </li>
                    </PublishedOpinionUnOrderLists>
                  </PublishedOpinionDetailsContainer>
                  <HorizontalLine
                    as="hr"
                    size="3"
                    width="100%"
                    color="#94a3b8"
                  />
                  <ChannelDetailsContainer>
                    <ChannelImage
                      as="img"
                      src={profileImageUrl}
                      alt="channel logo"
                    />
                    <ChannelNameSubscribersContainer>
                      <ChannelName bgColor={bgColor}>{name}</ChannelName>
                      <ChannelSubscribersCount>
                        {subscriberCount} subscribers
                      </ChannelSubscribersCount>
                    </ChannelNameSubscribersContainer>
                  </ChannelDetailsContainer>
                  <ChannelVideoDescription bgColor={bgColor}>
                    {description}
                  </ChannelVideoDescription>
                </VideoDetailsSuccessView>
              </DesktopView>
              <MobileView>
                <VideoDetailsSuccessView bgColor={bgColor}>
                  <ReactPlayer
                    url={videoUrl}
                    controls
                    width="100%"
                    height="230px"
                    light={<img src={thumbNailUrl} alt="video thumbnail" />}
                    className="react-player-style"
                  />
                  <VideoDescription bgColor={bgColor}>{title}</VideoDescription>
                  <PublishedOpinionDetailsContainer>
                    <PublishedOpinionUnOrderLists>
                      <ViewsList>
                        <PubOpinionDetails>{viewCount} Views</PubOpinionDetails>
                      </ViewsList>
                      <PublishedList>
                        <PubOpinionDetails>
                          {daysAgo} Years Ago
                        </PubOpinionDetails>
                      </PublishedList>
                    </PublishedOpinionUnOrderLists>
                    <PublishedOpinionUnOrderLists>
                      <li>
                        <Button
                          type="button"
                          theme={isLikedActive}
                          onClick={this.onClickedLikeButton}
                        >
                          <BiLike size={20} /> Like
                        </Button>
                      </li>
                      <li>
                        <Button
                          type="button"
                          theme={isDislikedActive}
                          onClick={this.onClickedDislikeButton}
                        >
                          <BiDislike size={20} /> Dislike
                        </Button>
                      </li>
                      <li>
                        <Button
                          type="button"
                          theme={isSavedActive}
                          onClick={this.onClickedSaveButton}
                        >
                          <RiMenuAddLine size={20} /> {saveButtonText}
                        </Button>
                      </li>
                    </PublishedOpinionUnOrderLists>
                  </PublishedOpinionDetailsContainer>
                  <HorizontalLine
                    as="hr"
                    size="3"
                    width="100%"
                    color="#94a3b8"
                  />
                  <ChannelDetailsContainer>
                    <ChannelImage
                      as="img"
                      src={profileImageUrl}
                      alt="channel logo"
                    />
                    <ChannelNameSubscribersContainer>
                      <ChannelName bgColor={bgColor}>{name}</ChannelName>
                      <ChannelSubscribersCount>
                        {subscriberCount} subscribers
                      </ChannelSubscribersCount>
                    </ChannelNameSubscribersContainer>
                  </ChannelDetailsContainer>
                  <ChannelVideoDescription bgColor={bgColor}>
                    {description}
                  </ChannelVideoDescription>
                </VideoDetailsSuccessView>
              </MobileView>
            </>
          )
        }}
      </ActiveMenuThemeSavedVideosContext.Consumer>
    )
  }

  failureView = () => (
    <FailureView>
      <FailureImage
        as="img"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureDescription>
        We are having some trouble to complete your request.Please try again.
      </FailureDescription>
      <RetryButton as="button" type="button" onClick={this.getVideoDetails}>
        Retry
      </RetryButton>
    </FailureView>
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
            <VideoItemDetailsContainer
              data-testid="videoItemDetails"
              bgColor={bgColor}
            >
              <Header />
              <VideoDetailsContainer>
                <SectionsList>
                  <SideBar />
                </SectionsList>
                {this.renderView()}
              </VideoDetailsContainer>
            </VideoItemDetailsContainer>
          )
        }}
      </ActiveMenuThemeSavedVideosContext.Consumer>
    )
  }
}
export default VideoItemDetails
