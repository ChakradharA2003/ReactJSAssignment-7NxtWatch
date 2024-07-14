import SectionItems from '../SectionItems'
import {
  SideBarContainer,
  SideBarContactDetails,
  ContactHeading,
  SocialMediaLogos,
  LogoImage,
  ContactDescription,
} from './sideBarStyled'
import ActiveMenuThemeSavedVideos from '../../Context/ActiveMenuThemeSavedVideosContext'

const SideBar = () => (
  <ActiveMenuThemeSavedVideos.Consumer>
    {value => {
      const {isDark} = value
      const bgColor = isDark ? 'dark' : 'light'
      return (
        <SideBarContainer bgColor={bgColor}>
          <SectionItems />
          <SideBarContactDetails>
            <ContactHeading bgColor={bgColor}>CONTACT US</ContactHeading>
            <SocialMediaLogos>
              <LogoImage
                as="img"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <LogoImage
                as="img"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <LogoImage
                as="img"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialMediaLogos>
            <ContactDescription bgColor={bgColor}>
              Enjoy! Now to see your channels and recommendations!
            </ContactDescription>
          </SideBarContactDetails>
        </SideBarContainer>
      )
    }}
  </ActiveMenuThemeSavedVideos.Consumer>
)
export default SideBar
