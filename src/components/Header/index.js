import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {IoMdClose} from 'react-icons/io'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut, FiSun} from 'react-icons/fi'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import SectionItems from '../SectionItems'
import ActiveMenuThemeSavedVideos from '../../Context/ActiveMenuThemeSavedVideosContext'
import {
  DesktopHeaderContainer,
  // MobileHeaderContainer,
  WebsiteLogo,
  // MobileWebsiteLogo,
  HeaderOptionsContainer,
  // MobileHeaderOptionsContainer,
  Buttons,
  ProfileImage,
  LogoutButton,
  MobileLogoutButton,
  LogoutPopUpContainer,
  PopUpQuestion,
  PopUpButtonsContainer,
  CancelButton,
  ConfirmButton,
  SectionsListPopUpContainer,
  SectionsPopupCloseButton,
  DisplaySectionsButton,
} from './headerStyled'

const Header = props => (
  <ActiveMenuThemeSavedVideos.Consumer>
    {value => {
      const {isDark, changeTheme} = value
      const onClickedLogOut = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }
      const websiteLogo = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      const bgColor = isDark ? 'dark' : 'light'
      const changeThemeIconDesktop = isDark ? (
        <FiSun size={30} color="#f9f9f9" />
      ) : (
        <FaMoon size={30} color="#0f0f0f" />
      )
      /*
      const changeThemeIconMobile = isDark ? (
        <FiSun size={20} color="#f9f9f9" />
      ) : (
        <FaMoon size={20} color="#0f0f0f" />
      )
      */
      return (
        <>
          <DesktopHeaderContainer bgColor={bgColor}>
            <Link to="/">
              <WebsiteLogo src={websiteLogo} alt="website logo" />
            </Link>
            <HeaderOptionsContainer>
              <Buttons
                data-testid="theme"
                type="button"
                onClick={() => changeTheme()}
              >
                {changeThemeIconDesktop}
              </Buttons>
              <Buttons type="button">
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </Buttons>
              <Popup
                modal
                trigger={
                  <DisplaySectionsButton type="button">
                    <GiHamburgerMenu
                      size={20}
                      color={isDark ? '#f9f9f9' : '#0f0f0f'}
                    />
                  </DisplaySectionsButton>
                }
              >
                {close => (
                  <SectionsListPopUpContainer bgColor={bgColor}>
                    <SectionsPopupCloseButton
                      type="button"
                      onClick={() => close()}
                    >
                      <IoMdClose
                        size={20}
                        color={isDark ? '#f9f9f9' : '#0f0f0f'}
                      />
                    </SectionsPopupCloseButton>
                    <SectionItems />
                  </SectionsListPopUpContainer>
                )}
              </Popup>
              <Popup
                modal
                trigger={<LogoutButton type="button">Logout</LogoutButton>}
              >
                {close => (
                  <LogoutPopUpContainer bgColor={bgColor}>
                    <PopUpQuestion bgColor={bgColor}>
                      Are you sure you want to logout?
                    </PopUpQuestion>
                    <PopUpButtonsContainer>
                      <CancelButton
                        as="button"
                        type="button"
                        onClick={() => close()}
                      >
                        Cancel
                      </CancelButton>
                      <ConfirmButton
                        as="button"
                        type="button"
                        onClick={onClickedLogOut}
                      >
                        Confirm
                      </ConfirmButton>
                    </PopUpButtonsContainer>
                  </LogoutPopUpContainer>
                )}
              </Popup>
              <Popup
                modal
                trigger={
                  <MobileLogoutButton type="button">
                    <FiLogOut
                      size={20}
                      color={isDark ? '#f9f9f9' : '#0f0f0f'}
                    />
                  </MobileLogoutButton>
                }
              >
                {close => (
                  <LogoutPopUpContainer bgColor={bgColor}>
                    <PopUpQuestion bgColor={bgColor}>
                      Are you sure you want to logout?
                    </PopUpQuestion>
                    <PopUpButtonsContainer>
                      <CancelButton type="button" onClick={() => close()}>
                        Cancel
                      </CancelButton>
                      <ConfirmButton type="button" onClick={onClickedLogOut}>
                        Confirm
                      </ConfirmButton>
                    </PopUpButtonsContainer>
                  </LogoutPopUpContainer>
                )}
              </Popup>
            </HeaderOptionsContainer>
          </DesktopHeaderContainer>
        </>
      )
    }}
  </ActiveMenuThemeSavedVideos.Consumer>
)

export default withRouter(Header)

/*
<MobileHeaderContainer bgColor={bgColor}>
            <Link to="/">
              <MobileWebsiteLogo src={websiteLogo} alt="website logo" />
            </Link>
            <MobileHeaderOptionsContainer>
              <Buttons
                data-testid="theme"
                type="button"
                onClick={() => changeTheme()}
              >
                {changeThemeIconMobile}
              </Buttons>

              <Popup
                modal
                trigger={
                   <MobileLogoutButton type="button">
                      <FiLogOut size={20} color={isDark ? '#f9f9f9' : '#0f0f0f'} />
                   </MobileLogoutButton>  
                }
              >
                {close => (
                  <LogoutPopUpContainer bgColor={bgColor}>
                    <PopUpQuestion bgColor={bgColor}>
                      Are you sure you want to logout?
                    </PopUpQuestion>
                    <PopUpButtonsContainer>
                      <CancelButton type="button" onClick={() => close()}>
                        Cancel
                      </CancelButton>
                      <ConfirmButton type="button" onClick={onClickedLogOut}>
                        Confirm
                      </ConfirmButton>
                    </PopUpButtonsContainer>
                  </LogoutPopUpContainer>
                )}
              </Popup>
            </MobileHeaderOptionsContainer>
          </MobileHeaderContainer>
*/
