import React from 'react'

const ActiveMenuThemeSavedVideosContext = React.createContext({
  activeMenu: 'INITIAL',
  changeActiveMenu: () => {},
  isDark: false,
  changeTheme: () => {},
  isSave: false,
  savedVideosList: [],
  saveVideo: () => {},
  updateSavedVideos: () => {},
  clickedSave: () => {},
})
export default ActiveMenuThemeSavedVideosContext
