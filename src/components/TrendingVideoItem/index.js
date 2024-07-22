import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import ActiveMenuThemeSavedVideosContext from '../../Context/ActiveMenuThemeSavedVideosContext'
import {
  VideoItemList,
  ThumbNailImage,
  VideoItemDetails,
  Title,
  ChannelName,
  ViewsAndPublishedDetailsUl,
  PubAndViews,
  // PublishedList,
  DesktopView,
  // MobileView,
  ChannelImage,
  // MobileChannelDetails,
  // MobileViewVideoDetails,
  // MobileNameList,
  VideoItemSubDetails,
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
    <ActiveMenuThemeSavedVideosContext.Consumer>
      {value => {
        const {isDark} = value
        const color = isDark ? 'dark' : 'light'
        return (
          <DesktopView>
            <Link to={`/videos/${id}`} className="link-item">
              <VideoItemList>
                <ThumbNailImage
                  as="img"
                  src={thumbNailUrl}
                  alt="video thumbnail"
                />
                <VideoItemSubDetails>
                  <ChannelImage
                    as="img"
                    src={profileImageUrl}
                    alt="channel logo"
                  />
                  <VideoItemDetails>
                    <Title color={color}>{title}</Title>
                    <VideoItemSubDetails>
                      <ChannelName color={color}>{name}</ChannelName>
                      <ViewsAndPublishedDetailsUl>
                        <li>
                          <PubAndViews color={color}>
                            {viewCount} Views
                          </PubAndViews>
                        </li>
                        <li className="list-style-color">
                          <PubAndViews color={color}>
                            {daysAgo} Years
                          </PubAndViews>
                        </li>
                      </ViewsAndPublishedDetailsUl>
                    </VideoItemSubDetails>
                  </VideoItemDetails>
                </VideoItemSubDetails>
              </VideoItemList>
            </Link>
          </DesktopView>
        )
      }}
    </ActiveMenuThemeSavedVideosContext.Consumer>
  )
}
export default TrendingVideoItem

/*
<MobileView>
              <Link to={`/videos/${id}`} className="link-item">
                <VideoItemList>
                  <ThumbNailImage
                    as="img"
                    src={thumbNailUrl}
                    alt="video thumbnail"
                  />
                  <MobileChannelDetails>
                    <ChannelImage
                      as="img"
                      src={profileImageUrl}
                      alt="channel logo"
                    />
                    <VideoItemDetails>
                      <Title color={color}>{title}</Title>
                      <MobileViewVideoDetails>
                        <MobileNameList>
                          <ChannelName color={color}>{name}</ChannelName>
                        </MobileNameList>
                        <li>
                          <ChannelName color={color}>
                            {viewCount} Views
                          </ChannelName>
                        </li>
                        <li>
                          <ChannelName color={color}>
                            {daysAgo} Years
                          </ChannelName>
                        </li>
                      </MobileViewVideoDetails>
                    </VideoItemDetails>
                  </MobileChannelDetails>
                </VideoItemList>
              </Link>
            </MobileView>

*/
