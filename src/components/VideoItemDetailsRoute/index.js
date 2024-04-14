import {Component} from 'react'

import ReactPlayer from 'react-player/youtube'

import {formatDistanceToNow} from 'date-fns'

import {BiLike, BiDislike} from 'react-icons/bi'

import {MdPlaylistAdd} from 'react-icons/md'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import CardContext from '../../Context/CardContext'

import Header from '../Header'

import Sidebar from '../Sidebar'
import FailureView from '../FailureView'

import {
  VideoDetailsContainer,
  VideoMainContent,
  LoaderContainer,
  FailedContainer,
  VideoDetailsSuccess,
  VideoDetailsTitle,
  VideoDetailsContentContainer,
  ViewAndPublishedContainer,
  ViewCount,
  Published,
  LikeDesLikeSaveContainer,
  IconButton,
  IconDesc,
  VideoDetailsBottom,
  Thumbnail,
  BottomContent,
  TitleName,
  TitleSubscribe,
  Description,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetailsRoute extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    vsDetails: [],
    isLike: false,
    isDisLike: false,
    isVideoSaved: false,
  }

  componentDidMount() {
    this.getVideoById()
  }

  getVideoById = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchData = await response.json()
      const updateData = {
        description: fetchData.video_details.description,
        id: fetchData.video_details.id,
        publishedAt: fetchData.video_details.published_at,
        thumbnailUrl: fetchData.video_details.thumbnail_url,
        title: fetchData.video_details.title,
        videoURL: fetchData.video_details.video_url,
        viewCount: fetchData.video_details.view_count,
        channel: {
          name: fetchData.video_details.channel.name,
          profileImageUrl: fetchData.video_details.channel.profile_image_url,
          subscriberCount: fetchData.video_details.channel.subscriber_count,
        },
      }
      this.setState({
        vsDetails: updateData,
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
    this.getVideoById()
  }

  renderFailureView = () => (
    <FailedContainer>
      <FailureView onRetry={this.onRetry} />
    </FailedContainer>
  )

  onClickLike = () => {
    this.setState(prevState => ({
      isLike: !prevState.isLike,
      isDisLike: false,
    }))
  }

  onClickDisLike = () => {
    this.setState(prevState => ({
      isDisLike: !prevState.isDisLike,
      isLike: false,
    }))
  }

  renderSuccessDetails = () => (
    <CardContext.Consumer>
      {value => {
        const {isDarkTheme, addVideo} = value

        const textColor = isDarkTheme ? '#f1f5f9' : '#1e293f'
        const descColor = isDarkTheme ? '#64748b' : '#231f20'

        const {vsDetails, isLike, isDisLike, isVideoSaved} = this.state

        const {videoURL, title, viewCount, description} = vsDetails

        const {publishedAt, channel} = vsDetails
        const onClickSaved = () => {
          this.setState(prevState => ({isVideoSaved: !prevState.isVideoSaved}))
          addVideo({...vsDetails})
        }

        const dateAgo = formatDistanceToNow(new Date(publishedAt))

        const saveIconColor = isVideoSaved ? '#2563eb' : '#64748b'

        return (
          <VideoDetailsSuccess>
            <ReactPlayer
              url={videoURL}
              key="video_url"
              controls
              width="100%"
              height="500px"
            />
            <VideoDetailsTitle textColor={textColor}>{title}</VideoDetailsTitle>
            <VideoDetailsContentContainer>
              <ViewAndPublishedContainer>
                <ViewCount descColor={descColor}>{viewCount} Views</ViewCount>
                <Published descColor={descColor} key="published_at">
                  {dateAgo}
                </Published>
              </ViewAndPublishedContainer>
              <LikeDesLikeSaveContainer>
                <IconButton
                  type="button"
                  onClick={this.onClickLike}
                  color={isLike ? '#64748b' : '#2563eb'}
                >
                  <BiLike size={20} />
                  <IconDesc>Like</IconDesc>
                </IconButton>
                <IconButton
                  type="button"
                  onClick={this.onClickDisLike}
                  color={isDisLike ? '#64748b' : '#2563eb'}
                >
                  <BiDislike size={20} />
                  <IconDesc>Dislike</IconDesc>
                </IconButton>
                <IconButton
                  type="button"
                  onClick={onClickSaved}
                  color={saveIconColor}
                >
                  <MdPlaylistAdd size={20} />
                  <IconDesc>{isVideoSaved ? 'Saved' : 'Save'}</IconDesc>
                </IconButton>
              </LikeDesLikeSaveContainer>
            </VideoDetailsContentContainer>
            <hr />
            <VideoDetailsBottom>
              <Thumbnail
                src={channel.profileImageUrl}
                alt="channel logo"
                key="profile_image_url"
              />
              <BottomContent>
                <TitleName textColor={textColor}>{channel.name}</TitleName>
                <TitleSubscribe descColor={descColor}>
                  {channel.subscriberCount} Subscribers
                </TitleSubscribe>
                <Description textColor={textColor}>{description}</Description>
              </BottomContent>
            </VideoDetailsBottom>
          </VideoDetailsSuccess>
        )
      }}
    </CardContext.Consumer>
  )

  renderAllDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessDetails()
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
      <CardContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <>
              <Header />
              <VideoDetailsContainer data-testid="videoItemDetails">
                <Sidebar />
                <VideoMainContent bgColor={bgColor}>
                  {this.renderAllDetails()}
                </VideoMainContent>
              </VideoDetailsContainer>
            </>
          )
        }}
      </CardContext.Consumer>
    )
  }
}

export default VideoItemDetailsRoute
