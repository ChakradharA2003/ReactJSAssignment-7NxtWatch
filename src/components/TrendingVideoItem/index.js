import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import {
  VideoItemList,
  ThumbNailImage,
  VideoItemDetails,
  Title,
  ChannelName,
  ViewsAndPublishedDetailsUl,
  PubAndViews,
  PublishedList,
  DesktopView,
  MobileView,
  ChannelImage,
  MobileChannelDetails,
  MobileViewVideoDetails,
  MobileNameList,
} from './trendingVideoItemStyled'
import './index.css'

const TrendingVideoItem = props => {
  const {details} = props
  const {id, channel, publishedAt, viewCount, thumbNailUrl, title} = details
  const {name, profileImageUrl} = channel
  const publishedAgo = formatDistanceToNow(new Date(publishedAt))
  const publishedSplit = publishedAgo.split(' ')
  const daysAgo = publishedSplit.splice(1, 1).join(' ')
  // console.log(daysAgo, viewCount)
  return (
    <>
      <DesktopView>
        <Link to={`/videos/${id}`} className="link-item">
          <VideoItemList>
            <ThumbNailImage as="img" src={thumbNailUrl} alt="video thumbnail" />
            <VideoItemDetails>
              <Title>{title}</Title>
              <ChannelName>{name}</ChannelName>
              <ViewsAndPublishedDetailsUl>
                <li>
                  <PubAndViews>{viewCount} Views</PubAndViews>
                </li>
                <PublishedList>
                  <PubAndViews>{daysAgo} Years</PubAndViews>
                </PublishedList>
              </ViewsAndPublishedDetailsUl>
            </VideoItemDetails>
          </VideoItemList>
        </Link>
      </DesktopView>
      <MobileView>
        <Link to={`/videos/${id}`} className="link-item">
          <VideoItemList>
            <ThumbNailImage as="img" src={thumbNailUrl} alt="video thumbnail" />
            <MobileChannelDetails>
              <ChannelImage as="img" src={profileImageUrl} alt="channel logo" />
              <VideoItemDetails>
                <Title>{title}</Title>
                <MobileViewVideoDetails>
                  <MobileNameList>
                    <ChannelName>{name}</ChannelName>
                  </MobileNameList>
                  <li>
                    <ChannelName>{viewCount} Views</ChannelName>
                  </li>
                  <li>
                    <ChannelName>{daysAgo} Years</ChannelName>
                  </li>
                </MobileViewVideoDetails>
              </VideoItemDetails>
            </MobileChannelDetails>
          </VideoItemList>
        </Link>
      </MobileView>
    </>
  )
}
export default TrendingVideoItem
