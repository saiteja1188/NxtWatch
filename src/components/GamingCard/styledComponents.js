import styled from 'styled-components/macro'
import {Link} from 'react-router-dom'

export const NavLink = styled(Link)`
  text-decoration: none;
  width: 45%;
  margin-right: 15px;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 100%;
`
export const ListImage = styled.img`
  width: 100%;
  margin-right: 20px;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`

export const CardText = styled.div`
  padding-top: 0px;
`
export const TextTitle = styled.p`
  margin-top: 0px;
  margin-right: 10px;
  font-family: Roboto;
  font-size: 14px;
  color: ${props => props.descColor};
`
export const TextTitleHeading = styled.h1`
  font-family: Roboto;
  font-size: 18px;
  color: ${props => props.textColor};
`
