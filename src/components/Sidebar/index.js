import {Component} from 'react'

import {AiFillHome, AiFillFire} from 'react-icons/ai'

import {SiYoutubegaming} from 'react-icons/si'

import {MdPlaylistAdd} from 'react-icons/md'

import CartContext from '../../Context/CardContext'

import {
  Navbar,
  NavbarContainer,
  NavbarOptions,
  NavLinkContainer,
  NavLink,
  NavText,
  // sidbar button //
  SidebarBottomItems,
  ContactUs,
  IconsContainer,
  IconButton,
  IconImg,
  Desc,
} from './styledComponents'

class Sidebar extends Component {
  renderSidedItems = () => (
    <CartContext.Consumer>
      {value => {
        const {activeTabItem, activeTab, isDarkTheme} = value

        const onClickHomeTabItem = () => {
          activeTabItem('HOME')
        }

        const onClickTrendingTabItem = () => {
          activeTabItem('TRENDING')
        }

        const onClickGamingTabItem = () => {
          activeTabItem('GAMING')
        }

        const onClickSavedVideosTabItem = () => {
          activeTabItem('SAVED-VIDEOS')
        }

        const bgColor = isDarkTheme ? '#212121' : '#ffffff'

        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
        const activeTabBg = isDarkTheme ? '#475569' : '#f1f5f9'

        return (
          <Navbar>
            <NavbarContainer bgColor={bgColor}>
              <NavbarOptions>
                <NavLink to="/">
                  <NavLinkContainer
                    key="home"
                    isActive={activeTab === 'HOME' ? activeTabBg : 'none'}
                    onClick={onClickHomeTabItem}
                  >
                    <AiFillHome
                      size={30}
                      color={activeTab === 'HOME' ? '#ff0000' : '#989898'}
                    />
                    <NavText color={textColor}>Home</NavText>
                  </NavLinkContainer>
                </NavLink>
                <NavLink to="/trending">
                  <NavLinkContainer
                    key="trending"
                    isActive={activeTab === 'TRENDING' ? activeTabBg : 'none'}
                    onClick={onClickTrendingTabItem}
                  >
                    <AiFillFire
                      size={30}
                      color={activeTab === 'TRENDING' ? '#ff0b37' : '#989898'}
                    />
                    <NavText color={textColor}>Trending</NavText>
                  </NavLinkContainer>
                </NavLink>
                <NavLink to="/gaming">
                  <NavLinkContainer
                    key="gaming"
                    isActive={activeTab === 'GAMING' ? activeTabBg : 'none'}
                    onClick={onClickGamingTabItem}
                  >
                    <SiYoutubegaming
                      size={30}
                      color={activeTab === 'GAMING' ? '#ff0b37' : '#989898'}
                    />
                    <NavText color={textColor}>Gaming</NavText>
                  </NavLinkContainer>
                </NavLink>
                <NavLink to="/saved-videos">
                  <NavLinkContainer
                    key="saved-videos"
                    isActive={
                      activeTab === 'SAVED-VIDEOS' ? activeTabBg : 'none'
                    }
                    onClick={onClickSavedVideosTabItem}
                  >
                    <MdPlaylistAdd
                      size={30}
                      color={activeTab === 'SAVED' ? '#ff0b37' : '#989898'}
                    />
                    <NavText color={textColor}>Saved Videos</NavText>
                  </NavLinkContainer>
                </NavLink>
              </NavbarOptions>
              <SidebarBottomItems>
                <ContactUs textColor={textColor}>CONTACT US</ContactUs>
                <IconsContainer>
                  <IconButton>
                    <IconImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt="facebook logo"
                    />
                  </IconButton>
                  <IconButton>
                    <IconImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                      alt="twitter logo"
                    />
                  </IconButton>
                  <IconButton>
                    <IconImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                      alt="linked in logo"
                    />
                  </IconButton>
                </IconsContainer>
                <Desc textColor={textColor}>
                  Enjoy! Now to see your channels and recommendations!
                </Desc>
              </SidebarBottomItems>
            </NavbarContainer>
          </Navbar>
        )
      }}
    </CartContext.Consumer>
  )

  render() {
    return <>{this.renderSidedItems()}</>
  }
}

export default Sidebar
