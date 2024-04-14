import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {FiSun, FiLogOut} from 'react-icons/fi'
import {BsMoon, BsList} from 'react-icons/bs'
import Popup from 'reactjs-popup'

import CartContext from '../../Context/CardContext'

import {
  NavbarHeader,
  ThemeButton,
  Profile,
  NavbarContainer,
  NavbarLogo,
  NavbarSmallContainer,
  LinkItems,
  // Logout PopUp //
  ButtonContainer,
  LogoutButtonSm,
  NavbarLinksContainer,
  ModelContainer,
  LogoutButton,
  ModelDesc,
  CloseButton,
  ConfirmButton,
  NavLink,
} from './styledComponents'

const Header = props => (
  <CartContext.Consumer>
    {value => {
      const {isDarkTheme, onChangeTheme} = value

      const onClickChangeTheme = () => {
        onChangeTheme()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const bgColor = isDarkTheme ? '#212121' : '#ffffff'
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <NavbarHeader bgColor={bgColor}>
          <NavbarContainer>
            <NavLink to="/">
              <NavbarLogo src={websiteLogo} alt="website logo" />
            </NavLink>
            <NavbarSmallContainer>
              <LinkItems>
                <ThemeButton
                  data-testid="theme"
                  onClick={onClickChangeTheme}
                  color={textColor}
                >
                  {isDarkTheme ? <FiSun /> : <BsMoon />}
                </ThemeButton>
              </LinkItems>
              <LinkItems>
                <BsList size={30} color="#000000" />
              </LinkItems>
              <LinkItems>
                <Popup
                  modal
                  trigger={
                    <LogoutButtonSm type="button" bgColor={bgColor}>
                      <FiLogOut />
                    </LogoutButtonSm>
                  }
                >
                  {close => (
                    <ModelContainer>
                      <ModelDesc>Are you sure, you want to Logout</ModelDesc>

                      <ButtonContainer>
                        <CloseButton
                          type="button"
                          className="trigger-button"
                          onClick={() => close()}
                        >
                          Cancel
                        </CloseButton>
                        <ConfirmButton type="button" onClick={onClickLogout}>
                          Confirm
                        </ConfirmButton>
                      </ButtonContainer>
                    </ModelContainer>
                  )}
                </Popup>
              </LinkItems>
            </NavbarSmallContainer>
            <NavbarLinksContainer>
              <LinkItems>
                <ThemeButton
                  data-testid="theme"
                  onClick={onClickChangeTheme}
                  color={textColor}
                >
                  {isDarkTheme ? <FiSun /> : <BsMoon />}
                </ThemeButton>
              </LinkItems>
              <LinkItems>
                <Profile
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </LinkItems>
              <LinkItems>
                <Popup
                  modal
                  trigger={
                    <LogoutButton type="button" textColor={textColor}>
                      Logout
                    </LogoutButton>
                  }
                >
                  {close => (
                    <ModelContainer>
                      <ModelDesc>Are you sure, you want to Logout</ModelDesc>

                      <ButtonContainer>
                        <CloseButton
                          type="button"
                          className="trigger-button"
                          onClick={() => close()}
                        >
                          Cancel
                        </CloseButton>
                        <ConfirmButton type="button" onClick={onClickLogout}>
                          Confirm
                        </ConfirmButton>
                      </ButtonContainer>
                    </ModelContainer>
                  )}
                </Popup>
              </LinkItems>
            </NavbarLinksContainer>
          </NavbarContainer>
        </NavbarHeader>
      )
    }}
  </CartContext.Consumer>
)

export default withRouter(Header)
