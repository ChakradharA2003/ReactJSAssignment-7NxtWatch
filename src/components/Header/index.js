import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import {
  DesktopHeaderContainer,
  MobileHeaderContainer,
  WebsiteLogo,
  MobileWebsiteLogo,
  HeaderOptionsContainer,
  MobileHeaderOptionsContainer,
  Buttons,
  ProfileImage,
  LogoutButton,
  LogoutPopUpContainer,
  PopUpQuestion,
  PopUpButtonsContainer,
  CancelButton,
  ConfirmButton,
} from './headerStyled'

class Header extends Component {
  onClickedLogOut = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <>
        <DesktopHeaderContainer>
          <Link to="/">
            <WebsiteLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
          </Link>
          <HeaderOptionsContainer>
            <Buttons type="button">
              <FaMoon size={30} />
            </Buttons>
            <Buttons type="button">
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </Buttons>
            <Popup
              modal
              trigger={<LogoutButton type="button">Logout</LogoutButton>}
            >
              {close => (
                <LogoutPopUpContainer>
                  <PopUpQuestion>
                    Are you sure you want to logout?
                  </PopUpQuestion>
                  <PopUpButtonsContainer>
                    <CancelButton type="button" onClick={() => close()}>
                      Cancel
                    </CancelButton>
                    <ConfirmButton type="button" onClick={this.onClickedLogOut}>
                      Confirm
                    </ConfirmButton>
                  </PopUpButtonsContainer>
                </LogoutPopUpContainer>
              )}
            </Popup>
          </HeaderOptionsContainer>
        </DesktopHeaderContainer>
        <MobileHeaderContainer>
          <Link to="/">
            <MobileWebsiteLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
          </Link>
          <MobileHeaderOptionsContainer>
            <Buttons type="button">
              <FaMoon size={20} />
            </Buttons>

            <Popup modal trigger={<FiLogOut size={20} />}>
              {close => (
                <LogoutPopUpContainer>
                  <PopUpQuestion>
                    Are you sure you want to logout?
                  </PopUpQuestion>
                  <PopUpButtonsContainer>
                    <CancelButton type="button" onClick={() => close()}>
                      Cancel
                    </CancelButton>
                    <ConfirmButton type="button" onClick={this.onClickedLogOut}>
                      Confirm
                    </ConfirmButton>
                  </PopUpButtonsContainer>
                </LogoutPopUpContainer>
              )}
            </Popup>
          </MobileHeaderOptionsContainer>
        </MobileHeaderContainer>
      </>
    )
  }
}
export default withRouter(Header)
