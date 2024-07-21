import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import ActiveMenuThemeSavedVideosContext from './Context/ActiveMenuThemeSavedVideosContext'
import './App.css'
import ProtectedRoute from './components/ProtectedRoute'

const sectionConstants = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED VIDEOS',
}

// Replace your code here
class App extends Component {
  state = {
    activeMenu: sectionConstants.home,
    isDark: false,
    savedVideosList: [],
    isSave: false,
  }

  changeActiveMenu = menu => {
    this.setState({activeMenu: menu})
  }

  changeTheme = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  saveVideo = details => {
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, details],
    }))
  }

  updateSavedVideos = details => {
    const {savedVideosList} = this.state
    const updatedVideos = savedVideosList.filter(
      video => video.id !== details.id,
    )
    this.setState({savedVideosList: updatedVideos})
  }

  checkSave = details => {
    const {isSave} = this.state
    if (isSave) {
      this.updateSavedVideos(details)
    } else {
      this.saveVideo(details)
    }
  }

  clickedSave = details => {
    this.setState(
      prevState => ({isSave: !prevState.isSave}),
      this.checkSave(details),
    )
  }

  render() {
    const {activeMenu, isDark, savedVideosList} = this.state
    // console.log(savedVideos)
    return (
      <ActiveMenuThemeSavedVideosContext.Provider
        value={{
          activeMenu,
          isDark,
          savedVideosList,
          changeActiveMenu: this.changeActiveMenu,
          changeTheme: this.changeTheme,
          saveVideo: this.saveVideo,
          clickedSave: this.clickedSave,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ActiveMenuThemeSavedVideosContext.Provider>
    )
  }
}

export default App
