import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'

export const Navbar = styled.div`
  display: none;
  min-height: 92%;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const NavbarContainer = styled.div`
  width: 250px;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`
export const NavbarOptions = styled.ul`
  padding: 0px;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  flex-grow: 1;
`

export const NavLinkContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.isActive};
  padding-left: 20px;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const NavText = styled.p`
  font-family: roboto;
  font-size: 16px;
  font-weight: 500;
  margin-left: 12px;
  color: ${props => props.color};
`
export const SidebarBottomItems = styled.div`
  padding: 0px 10px;
`
export const ContactUs = styled.p`
  font-family: roboto;
  font-size: 24px;
  color: ${props => props.textColor};
`
export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const IconButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
`
export const IconImg = styled.img`
  width: 40px;
  height: 40px;
`

export const Desc = styled.p`
  font-family: roboot;
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.textColor};
`
