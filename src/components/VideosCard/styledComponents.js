import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'

export const NavLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  margin-right: 15px;
  margin-bottom: 20px;
  padding-bottom: 30px;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const ListItem = styled.li`
  list-style-type: none;
  width: 100%;
`
export const TitleAndView = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
`
export const ListImage = styled.img`
  width: 100%;
`
export const ListContent = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-top: 10px;
`
export const ListProfile = styled.img`
  width: 50px;
  height: 50px;
`
export const CardText = styled.div`
  padding-top: 0px;
  margin-left: 10px;
`
export const TextTitle = styled.p`
  font-family: roboto;
  font-size: 16px;
  margin-top: 0px;
  margin-right: 10px;
  color: ${props => props.textColor};
`
export const TextDesc = styled.p`
  color: ${props => props.descColor};
  font-family: roboto;
  font-size: 16px;
  margin-top: 0px;
  margin-right: 10px;
`
