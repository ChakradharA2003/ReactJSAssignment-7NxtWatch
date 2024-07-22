import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddLine} from 'react-icons/ri'
import {
  SectionItemsContainer,
  LinkItem,
  LinkName,
  // Button,
} from './sectionItemStyled'

import './index.css'

import ActiveMenuThemeSavedVideos from '../../Context/ActiveMenuThemeSavedVideosContext'

const sectionConstants = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED VIDEOS',
}

const SectionItems = () => (
  <ActiveMenuThemeSavedVideos.Consumer>
    {value => {
      const {activeMenu, changeActiveMenu, isDark} = value
      const activeSection = activeMenu
      const linkItemBgColor = isDark ? 'dark' : 'light'
      const nonActiveLinkIconColor =
        linkItemBgColor === 'dark' ? '#ffffff' : '#475569'
      return (
        <SectionItemsContainer>
          <Link
            to="/"
            className="link-item"
            onClick={() => changeActiveMenu(sectionConstants.home)}
          >
            <LinkItem
              bgColor={
                activeSection === sectionConstants.home ? 'Active' : 'Inactive'
              }
              linkItemBgColor={linkItemBgColor}
            >
              <AiFillHome
                color={
                  activeSection === sectionConstants.home
                    ? '#ff0000'
                    : nonActiveLinkIconColor
                }
                size={20}
              />
              <LinkName
                fontWeight={
                  activeSection === sectionConstants.home ? 'High' : 'Low'
                }
                linkItemBgColor={linkItemBgColor}
              >
                Home
              </LinkName>
            </LinkItem>
          </Link>
          <Link
            to="/trending"
            className="link-item"
            onClick={() => changeActiveMenu(sectionConstants.trending)}
          >
            <LinkItem
              bgColor={
                activeSection === sectionConstants.trending
                  ? 'Active'
                  : 'Inactive'
              }
              linkItemBgColor={linkItemBgColor}
            >
              <AiFillFire
                color={
                  activeSection === sectionConstants.trending
                    ? '#ff0000'
                    : nonActiveLinkIconColor
                }
                size={20}
              />
              <LinkName
                fontWeight={
                  activeSection === sectionConstants.trending ? 'High' : 'Low'
                }
                linkItemBgColor={linkItemBgColor}
              >
                Trending
              </LinkName>
            </LinkItem>
          </Link>
          <Link
            to="/gaming"
            className="link-item"
            onClick={() => changeActiveMenu(sectionConstants.gaming)}
          >
            <LinkItem
              bgColor={
                activeSection === sectionConstants.gaming
                  ? 'Active'
                  : 'Inactive'
              }
              linkItemBgColor={linkItemBgColor}
            >
              <SiYoutubegaming
                color={
                  activeSection === sectionConstants.gaming
                    ? '#ff0000'
                    : nonActiveLinkIconColor
                }
                size={20}
              />
              <LinkName
                fontWeight={
                  activeSection === sectionConstants.gaming ? 'High' : 'Low'
                }
                linkItemBgColor={linkItemBgColor}
              >
                Gaming
              </LinkName>
            </LinkItem>
          </Link>
          <Link
            to="/saved-videos"
            className="link-item"
            onClick={() => changeActiveMenu(sectionConstants.savedVideos)}
          >
            <LinkItem
              bgColor={
                activeSection === sectionConstants.savedVideos
                  ? 'Active'
                  : 'Inactive'
              }
              linkItemBgColor={linkItemBgColor}
            >
              <RiMenuAddLine
                color={
                  activeSection === sectionConstants.savedVideos
                    ? '#ff0000'
                    : nonActiveLinkIconColor
                }
                size={20}
              />
              <LinkName
                fontWeight={
                  activeSection === sectionConstants.savedVideos
                    ? 'High'
                    : 'Low'
                }
                linkItemBgColor={linkItemBgColor}
              >
                Saved Videos
              </LinkName>
            </LinkItem>
          </Link>
        </SectionItemsContainer>
      )
    }}
  </ActiveMenuThemeSavedVideos.Consumer>
)
export default SectionItems
