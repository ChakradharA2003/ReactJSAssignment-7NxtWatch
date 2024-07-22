import Header from '../Header/index'
import SideBar from '../SideBar/index'
import ActiveMenuThemeSavedVideosContext from '../../Context/ActiveMenuThemeSavedVideosContext'
import {
  NotFoundMainContainer,
  SectionsList,
  NotFoundDetailsContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './notFoundStyled'

const NotFound = () => (
  <ActiveMenuThemeSavedVideosContext.Consumer>
    {value => {
      const {isDark} = value
      const theme = isDark ? 'dark' : 'light'
      const notFoundImage = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <div>
          <Header />
          <NotFoundMainContainer>
            <SectionsList>
              <SideBar />
            </SectionsList>
            <NotFoundDetailsContainer bgColor={theme}>
              <NotFoundImage as="img" src={notFoundImage} alt="not found" />
              <NotFoundHeading theme={theme}>Page Not Found</NotFoundHeading>
              <NotFoundDescription theme={theme}>
                We are sorry, the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundDetailsContainer>
          </NotFoundMainContainer>
        </div>
      )
    }}
  </ActiveMenuThemeSavedVideosContext.Consumer>
)
export default NotFound
