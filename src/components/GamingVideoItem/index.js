import {Link} from 'react-router-dom'
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
    <Link to={`/videos/${id}`} className="link-item">
      <GamingVideoItemList>
        <VideoThumbNail as="img" src={thumbNailUrl} alt="thumbnail image" />
        <GamingVideoTitle>{title}</GamingVideoTitle>
        <GamingVideoViewCount>
          {viewCount} Watching Worldwide
        </GamingVideoViewCount>
      </GamingVideoItemList>
    </Link>
  )
}
export default GamingVideoItem
