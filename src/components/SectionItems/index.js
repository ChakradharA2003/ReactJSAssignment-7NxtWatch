import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddLine} from 'react-icons/ri'
import {
  SectionItemsContainer,
  LinkItem,
  LinkName,
  Button,
} from './sectionItemStyled'
import './index.css'

const sectionConstants = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED VIDEOS',
}

class SectionItems extends Component {
  state = {
    activeSection: sectionConstants.home,
  }

  onClickedHome = () => {
    this.setState({activeSection: sectionConstants.home})
  }

  onClickedTrending = () => {
    console.log(sectionConstants.trending)
    this.setState({activeSection: sectionConstants.trending})
  }

  onClickedGaming = () => {
    this.setState({activeSection: sectionConstants.gaming})
  }

  onClickedSavedVideos = () => {
    this.setState({activeSection: sectionConstants.savedVideos})
  }

  render() {
    const {activeSection} = this.state
    console.log(activeSection)
    return (
      <SectionItemsContainer>
        <Link to="/" className="link-item">
          <Button type="button" onClick={this.onClickedHome}>
            <LinkItem
              bgColor={
                activeSection === sectionConstants.home ? 'Active' : 'Inactive'
              }
            >
              <AiFillHome
                color={
                  activeSection === sectionConstants.home
                    ? '#ff0000'
                    : '#475569'
                }
                size={20}
              />
              <LinkName
                fontWeight={
                  activeSection === sectionConstants.home ? 'High' : 'Low'
                }
              >
                Home
              </LinkName>
            </LinkItem>
          </Button>
        </Link>
        <Link to="/trending" className="link-item">
          <Button type="button" onClick={this.onClickedTrending}>
            <LinkItem
              bgColor={
                activeSection === sectionConstants.trending
                  ? 'Active'
                  : 'Inactive'
              }
            >
              <AiFillFire
                color={
                  activeSection === sectionConstants.trending
                    ? '#ff0000'
                    : '#475569'
                }
                size={20}
              />
              <LinkName
                fontWeight={
                  activeSection === sectionConstants.trending ? 'High' : 'Low'
                }
              >
                Trending
              </LinkName>
            </LinkItem>
          </Button>
        </Link>
        <Link to="/gaming" className="link-item">
          <Button type="button" onClick={this.onClickedGaming}>
            <LinkItem
              bgColor={
                activeSection === sectionConstants.gaming
                  ? 'Active'
                  : 'Inactive'
              }
            >
              <SiYoutubegaming
                color={
                  activeSection === sectionConstants.gaming
                    ? '#ff0000'
                    : '#475569'
                }
                size={20}
              />
              <LinkName
                fontWeight={
                  activeSection === sectionConstants.gaming ? 'High' : 'Low'
                }
              >
                Gaming
              </LinkName>
            </LinkItem>
          </Button>
        </Link>
        <Link to="/saved-videos" className="link-item">
          <Button type="button" onClick={this.onClickedSavedVideos}>
            <LinkItem
              bgColor={
                activeSection === sectionConstants.savedVideos
                  ? 'Active'
                  : 'Inactive'
              }
            >
              <RiMenuAddLine
                color={
                  activeSection === sectionConstants.savedVideos
                    ? '#ff0000'
                    : '#475569'
                }
                size={20}
              />
              <LinkName
                fontWeight={
                  activeSection === sectionConstants.savedVideos
                    ? 'High'
                    : 'Low'
                }
              >
                Saved Videos
              </LinkName>
            </LinkItem>
          </Button>
        </Link>
      </SectionItemsContainer>
    )
  }
}
export default SectionItems
