import {Component} from 'react'

import Cookies from 'js-cookie'

import {SiYoutubegaming} from 'react-icons/si'

import Loader from 'react-loader-spinner'

import Header from '../Header'
import Sidebar from '../Sidebar'
import CartContext from '../../Context/CardContext'

import GamingCard from '../GamingCard'
import FailureView from '../FailureView'

import {
  GamingContainer,
  TrendingContainer,
  SuccessVideoContainer,
  TrendingMainContainer,
  SuccessTop,
  TopHeading,
  IconTrend,
  FailedContainer,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GamingRoute extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    searchVideos: [],
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getFormattedData = data => ({
    id: data.id,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    viewCount: data.view_count,
  })

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'Get',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(eachVideos =>
        this.getFormattedData(eachVideos),
      )
      this.setState({
        searchVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingDetails = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#616e7c" width={50} height={50} />
    </LoaderContainer>
  )

  onRetry = () => {
    this.getGamingVideos()
  }

  renderFailureView = () => (
    <FailedContainer>
      <FailureView onClick={this.onRetry} />
    </FailedContainer>
  )

  renderSuccessVideos = () => {
    const {searchVideos} = this.state

    return (
      <>
        <SuccessTop>
          <IconTrend>
            <SiYoutubegaming color="#ff0000" size={30} />
          </IconTrend>
          <TopHeading>Gaming</TopHeading>
        </SuccessTop>
        <SuccessVideoContainer>
          {searchVideos.map(each => (
            <GamingCard key={each.id} videosDetails={each} />
          ))}
        </SuccessVideoContainer>
      </>
    )
  }

  renderGamingVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessVideos()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingDetails()
      default:
        return null
    }
  }

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

          return (
            <div>
              <Header />
              <GamingContainer>
                <Sidebar />
                <TrendingContainer bgColor={bgColor}>
                  <TrendingMainContainer>
                    {this.renderGamingVideos()}
                  </TrendingMainContainer>
                </TrendingContainer>
              </GamingContainer>
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default GamingRoute
