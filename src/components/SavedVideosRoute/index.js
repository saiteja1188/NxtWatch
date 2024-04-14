import {AiFillFire} from 'react-icons/ai'

import Header from '../Header'
import Sidebar from '../Sidebar'
import SaveVideoCard from '../SaveVideoCard'

import CardContext from '../../Context/CardContext'

import {
  SavedVideoContainer,
  SavedVideoList,
  SuccessTop,
  TopHeading,
  IconTrend,
  SavedContent,
  SuccessNoVideosContainer,
  NoVideoHeading,
  Desc,
  NoImage,
} from './styledComponents'

const SavedVideosRoute = () => (
  <CardContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      const textColor = isDarkTheme ? '#f9f9f9' : '#181818'
      const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

      return (
        <>
          <Header />
          <SavedVideoContainer data-testid="savedVideos" bgColor={bgColor}>
            <Sidebar />
            <SavedContent>
              <SuccessTop>
                <IconTrend>
                  <AiFillFire color="#ff0000" size={30} />
                </IconTrend>
                <TopHeading>Saved Videos</TopHeading>
              </SuccessTop>
              {savedVideos.length > 0 ? (
                <SavedVideoList>
                  {savedVideos.map(each => (
                    <SaveVideoCard key={each.key} SaveDetails={each} />
                  ))}
                </SavedVideoList>
              ) : (
                <SuccessNoVideosContainer>
                  <NoImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NoVideoHeading textColor={textColor}>
                    No Saved Videos found
                  </NoVideoHeading>
                  <Desc textColor={textColor}>
                    You can save your videos while watching theme
                  </Desc>
                </SuccessNoVideosContainer>
              )}
            </SavedContent>
          </SavedVideoContainer>
        </>
      )
    }}
  </CardContext.Consumer>
)

export default SavedVideosRoute
