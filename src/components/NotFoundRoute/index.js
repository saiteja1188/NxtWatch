import CardContext from '../../Context/CardContext'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  NotFoundContainer,
  NotFoundImg,
  NotFoundContent,
  NotFoundHeading,
  NotFoundDesc,
} from './styledComponents'

const NotFoundRoute = () => (
  <CardContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const textColor = isDarkTheme ? '#f1f5f9' : '#1e293f'
      const descColor = isDarkTheme ? '#e2e8f8' : '#475569'

      const imgUlr = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <NotFoundContainer data-testid="not-found">
            <Sidebar />
            <NotFoundContent bgColor={bgColor}>
              <NotFoundImg src={imgUlr} alt="not found" />
              <NotFoundHeading textColor={textColor}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundDesc descColor={descColor}>
                we are sorry, the page you requested could not be found.
              </NotFoundDesc>
            </NotFoundContent>
          </NotFoundContainer>
        </>
      )
    }}
  </CardContext.Consumer>
)

export default NotFoundRoute
