import {Link} from 'react-router-dom'
import ActiveMenuThemeSavedVideosContext from '../../Context/ActiveMenuThemeSavedVideosContext'
import {
  GamingVideoItemList,
  VideoThumbNail,
  GamingVideoTitle,
  GamingVideoViewCount,
} from './gamingVideoItemStyled'
import './index.css'

const GamingVideoItem = props => {
  const {details} = props
  const {id, title, thumbNailUrl, viewCount} = details
  return (
    <ActiveMenuThemeSavedVideosContext.Consumer>
      {value => {
        const {isDark} = value
        const color = isDark ? 'dark' : 'light'
        return (
          <Link to={`/videos/${id}`} className="link-item">
            <GamingVideoItemList>
              <VideoThumbNail
                as="img"
                src={thumbNailUrl}
                alt="thumbnail image"
              />
              <GamingVideoTitle color={color}>{title}</GamingVideoTitle>
              <GamingVideoViewCount color={color}>
                {viewCount} Watching Worldwide
              </GamingVideoViewCount>
            </GamingVideoItemList>
          </Link>
        )
      }}
    </ActiveMenuThemeSavedVideosContext.Consumer>
  )
}
export default GamingVideoItem
