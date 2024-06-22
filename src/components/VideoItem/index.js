import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

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
  console.log(daysAgo)
  return (
    <Link to={id} className="link-item">
      <LinkItem>
        <ThumbNailImage src={thumbnailUrl} alt="video thumbnail" />
        <VideoDetails>
          <ChannelImage src={profileImageUrl} alt="channel logo" />
          <VideoDescriptionContainer>
            <VideoTitle>{title}</VideoTitle>
            <ChannelName>{name}</ChannelName>
            <ViewsPublishContainer>
              <ViewCount>{viewCount} views *</ViewCount>
              <YearsAgo>{daysAgo} years ago</YearsAgo>
            </ViewsPublishContainer>
          </VideoDescriptionContainer>
        </VideoDetails>
      </LinkItem>
    </Link>
  )
}
export default VideoItem
