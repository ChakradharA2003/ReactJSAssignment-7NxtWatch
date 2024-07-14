import {Link} from 'react-router-dom'
import ActiveMenuThemeSavedVideosContext from '../../Context/ActiveMenuThemeSavedVideosContext'

const SavedVideos = () => (
  <ActiveMenuThemeSavedVideosContext.Consumer>
    {value => {
      const {savedVideosList} = value
      console.log(savedVideosList)
    }}
  </ActiveMenuThemeSavedVideosContext.Consumer>
)
export default SavedVideos
