import {Component} from 'react'

import {IoMdClose} from 'react-icons/io'

import CardContext from '../../Context/CardContext'

import Header from '../Header'

import Sidebar from '../Sidebar'

import SearchVideos from '../SearchVideos'

import {
  HomeContainer,
  HomeMainContainer,
  BannerImageContainer,
  ModelContainer,
  BannerImage,
  GetItNowButton,
  Paragraph,
  CloseButton,
} from './styledComponents'

class HomeRoute extends Component {
  state = {
    display: 'flex',
  }

  onClickClose = () => {
    this.setState({display: 'none'}, this.renderHomeVideos)
  }

  renderHomeVideos = () => {
    const {display} = this.state
    return (
      <>
        <BannerImageContainer data-testid="banner" display={display}>
          <ModelContainer data-testid="banner">
            <BannerImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
            <Paragraph>Buy Nxt Watch Premium prepaid plans with UPI</Paragraph>
            <GetItNowButton>GET IT NOW</GetItNowButton>
          </ModelContainer>
          <CloseButton
            type="button"
            data-testid="close"
            onClick={this.onClickClose}
          >
            <IoMdClose />
          </CloseButton>
        </BannerImageContainer>
        <SearchVideos />
      </>
    )
  }

  render() {
    return (
      <CardContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

          return (
            <div>
              <Header />
              <HomeContainer data-testid="home">
                <Sidebar />
                <HomeMainContainer bgColor={bgColor}>
                  {this.renderHomeVideos()}
                </HomeMainContainer>
              </HomeContainer>
            </div>
          )
        }}
      </CardContext.Consumer>
    )
  }
}
export default HomeRoute
