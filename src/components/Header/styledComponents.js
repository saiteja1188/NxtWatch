import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'

export const NavbarHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  position: sticky;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  width: 90%;
`

export const NavbarLogo = styled.img`
  width: 120px;
`

export const NavbarSmallContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavbarLinksContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const LinkItems = styled.div`
  margin-right: 10px;
  list-style-type: none;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 20px;
  color: ${props => props.color};
`
export const Profile = styled.img`
  width: 20px;
`
// Logout PopUp css //
export const ModelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  padding: 20px;
`
export const LogoutButton = styled.button`
  background-color: transparent;
  border: 1px solid #3b82f6;
  color: #3b82f6;
  font-family: roboto;
  font-size: 18px;
  font-weight: 500;
  padding: 6px 15px;
  color: ${props => props.textColor};
`
export const LogoutButtonSm = styled(LogoutButton)`
  color: black;
  font-size: 20px;
  border: none;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`
export const ModelDesc = styled.p``
export const AlignColumn = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor};
`
export const AlignRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CloseButton = styled.button`
  font-family: roboto;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid gray;
  color: gray;
  padding: 10px;
`
export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  font-family: roboto;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  color: #ffffff;
  padding: 10px;
`
