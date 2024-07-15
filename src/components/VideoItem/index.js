import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import ActiveMenuThemeSavedVideosContext from '../../Context/ActiveMenuThemeSavedVideosContext'
import {
  LinkItem,
  ThumbNailImage,
  VideoDetails,
  ChannelImage,
  VideoDescriptionContainer,
  VideoTitle,
  ChannelName,
  ViewsPublishContainer,
  ViewCount,
  YearsAgo,
  // listWithDisc,
} from './videoItemStyled'
import './index.css'

const VideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
    channel,
  } = videoDetails
  const {name, profileImageUrl} = channel
  const publishedAgo = formatDistanceToNow(new Date(publishedAt))
  const publishedSplit = publishedAgo.split(' ')
  // console.log(publishedAt)
  const daysAgo = publishedSplit.splice(1, 1).join(' ')
  // console.log(daysAgo)
  return (
    <ActiveMenuThemeSavedVideosContext.Consumer>
      {value => {
        const {isDark} = value
        const color = isDark ? 'dark' : 'light'
        return (
          <Link to={`/videos/${id}`} className="link-item">
            <LinkItem>
              <ThumbNailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetails>
                <ChannelImage src={profileImageUrl} alt="channel logo" />
                <VideoDescriptionContainer>
                  <VideoTitle color={color}>{title}</VideoTitle>
                  <ChannelName>{name}</ChannelName>
                  <ViewsPublishContainer>
                    <listWithDisc>
                      <ViewCount>{viewCount} views</ViewCount>
                    </listWithDisc>
                    <li>
                      <YearsAgo>{daysAgo} years ago</YearsAgo>
                    </li>
                  </ViewsPublishContainer>
                </VideoDescriptionContainer>
              </VideoDetails>
            </LinkItem>
          </Link>
        )
      }}
    </ActiveMenuThemeSavedVideosContext.Consumer>
  )
}
export default VideoItem
