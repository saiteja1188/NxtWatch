import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  list-style-type: none;
  width: 100%;
  margin-right: 15px;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const TitleAndView = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
`
export const ListImage = styled.img`
  width: 100%;
  padding-right: 20px;
  @media screen and (min-width: 768px) {
    width: 50%;
    margin-right: 20px;
  }
`
export const ListContent = styled.div`
  display: flex;
  align-items: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`
export const ListProfile = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const CardText = styled.div`
  padding-top: 0px;
`
export const TextTitle = styled.p`
  margin-top: 0px;
  margin-right: 10px;
  font-family: roboto;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.descColor};
`
export const TextTitleHeading = styled.h1`
  font-family: roboto;
  font-size: 24px;
  font-weight: 500;
  color: ${props => props.textColor};
`
