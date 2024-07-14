import Header from '../Header/index'
import SideBar from '../SideBar/index'
import {
  NotFoundMainContainer,
  SectionsList,
  NotFoundDetailsContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './notFoundStyled'

const NotFound = () => (
  <>
    <Header />
    <NotFoundMainContainer>
      <SectionsList>
        <SideBar />
      </SectionsList>
      <NotFoundDetailsContainer>
        <NotFoundImage
          as="img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
          alt="not found"
        />
        <NotFoundHeading>Page Not Found</NotFoundHeading>
        <NotFoundDescription>
          We are sorry, the page you requested could not be found.
        </NotFoundDescription>
      </NotFoundDetailsContainer>
    </NotFoundMainContainer>
  </>
)
export default NotFound
