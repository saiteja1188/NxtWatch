import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'
import {AiFillFire} from 'react-icons/ai'
import Header from '../Header'
import Sidebar from '../Sidebar'
import CartContext from '../../Context/CardContext'

import VideoCardTwo from '../VideoCardTwo'
import FailureView from '../FailureView'

import {
  TrendingContainer,
  LoaderContainer,
  SuccessVideoContainer,
  TrendingMainContainer,
  SuccessTop,
  TopHeading,
  IconTrend,
  FailedContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TrendingRoute extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    trendingVideos: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getFormattedData = data => ({
    id: data.id,
    publishedAt: data.published_at,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    viewCount: data.view_count,
    channel: {
      name: data.channel.name,
      profileImageUrl: data.channel.profile_image_url,
    },
  })

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
        trendingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#616e7c" width={50} height={50} />
    </LoaderContainer>
  )

  onRetry = () => {
    this.getTrendingVideos()
  }

  renderFailureView = () => (
    <FailedContainer>
      <FailureView onRetry={this.onRetry} />
    </FailedContainer>
  )

  renderSuccessVideos = () => {
    const {trendingVideos} = this.state

    return (
      <>
        <SuccessTop>
          <IconTrend>
            <AiFillFire color="#ff0000" size={30} />
          </IconTrend>
          <TopHeading>Trending</TopHeading>
        </SuccessTop>
        <SuccessVideoContainer>
          {trendingVideos.map(each => (
            <VideoCardTwo key={each.id} vDetails={each} />
          ))}
        </SuccessVideoContainer>
      </>
    )
  }

  renderTrendingVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessVideos()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <>
              <Header />
              <TrendingContainer data-testid="trending">
                <Sidebar />
                <TrendingMainContainer bgColor={bgColor}>
                  {this.renderTrendingVideos()}
                </TrendingMainContainer>
              </TrendingContainer>
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default TrendingRoute
