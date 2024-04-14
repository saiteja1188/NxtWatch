import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {IoMdSearch} from 'react-icons/io'

import CardContext from '../../Context/CardContext'

import VideosCard from '../VideosCard'
import FailureView from '../FailureView'

import {
  SearchAndVideoContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  SuccessNoVideosContainer,
  NoVideoHeading,
  Desc,
  RetryButton,
  NoImage,
  SuccessVideoContainer,
  LoaderContainer,
  FailedContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class SearchVideos extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    searchValue: '',
    searchVideos: [],
  }

  componentDidMount() {
    this.getAllSuggestionVideos()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchButton = () => {
    const {searchInput} = this.state
    this.setState({searchValue: searchInput}, this.getAllSuggestionVideos)
  }

  onEnterButton = event => {
    const {searchInput} = this.state
    if (event.key === 'Enter') {
      this.setState({searchValue: searchInput}, this.getAllSuggestionVideos)
    }
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

  getAllSuggestionVideos = async () => {
    const {searchValue} = this.state

    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchValue}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
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

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#616e7c" width={50} height={50} />
    </LoaderContainer>
  )

  onRetry = () => {
    this.getAllSuggestionVideos()
  }

  renderFailureView = () => (
    <FailedContainer>
      <FailureView onRetry={this.onRetry} />
    </FailedContainer>
  )

  renderSuccessVideos = () => (
    <CardContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {searchVideos} = this.state

        const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

        const isVideosAvailable = searchVideos.length > 0

        return isVideosAvailable ? (
          <SuccessVideoContainer bgColor={bgColor}>
            {searchVideos.map(eachVideos => (
              <VideosCard key={eachVideos.id} sDetails={eachVideos} />
            ))}
          </SuccessVideoContainer>
        ) : (
          <SuccessNoVideosContainer bgColor={bgColor}>
            <NoImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideoHeading textColor={textColor}>
              No Search results found
            </NoVideoHeading>
            <Desc textColor={textColor}>
              Try different key words or remove search filter
            </Desc>
            <RetryButton type="button" textColor={textColor}>
              Retry
            </RetryButton>
          </SuccessNoVideosContainer>
        )
      }}
    </CardContext.Consumer>
  )

  renderAllVideos = () => {
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
    const {searchInput} = this.state
    return (
      <CardContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

          const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

          return (
            <>
              <SearchAndVideoContainer bgColor={bgColor}>
                <SearchContainer bgColor={bgColor}>
                  <SearchInput
                    type="search"
                    placeholder="Search"
                    onChange={this.onChangeSearchInput}
                    onKeyDown={this.onEnterButton}
                    value={searchInput}
                    bgColor={bgColor}
                    textColor={textColor}
                  />
                  <SearchButton
                    type="button"
                    data-testid="searchButton"
                    onClick={this.onClickSearchButton}
                  >
                    <IoMdSearch />
                  </SearchButton>
                </SearchContainer>
                {this.renderAllVideos()}
              </SearchAndVideoContainer>
            </>
          )
        }}
      </CardContext.Consumer>
    )
  }
}

export default SearchVideos
