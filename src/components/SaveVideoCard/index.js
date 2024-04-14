import CardContext from '../../Context/CardContext'

import {
  NavLink,
  SaveListItem,
  SaveListImage,
  SaveListContent,
  SaveCardText,
  SaveTextTitle,
  SaveTitleAndView,
  SaveTextTitleHeading,
  SaveListProfile,
} from './styledComponents'

const VideosCardTwo = props => {
  const {SaveDetails} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = SaveDetails

  return (
    <CardContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f1f5f9' : '#1e293f'
        const descColor = isDarkTheme ? '#e2e8f8' : '#475569'

        return (
          <NavLink to={`/videos/${id}`}>
            <SaveListItem>
              <SaveListImage src={thumbnailUrl} alt="video thumbnail" />
              <SaveListContent>
                <div>
                  <SaveListProfile
                    src={channel.profileImageUrl}
                    alt={channel.name}
                  />
                </div>
                <SaveCardText>
                  <SaveTextTitleHeading textColor={textColor}>
                    {title}
                  </SaveTextTitleHeading>
                  <SaveTitleAndView>
                    <SaveTextTitle descColor={descColor}>
                      {channel.name}
                    </SaveTextTitle>
                    <SaveTextTitle descColor={descColor}>
                      {viewCount} View . {publishedAt}
                    </SaveTextTitle>
                  </SaveTitleAndView>
                </SaveCardText>
              </SaveListContent>
            </SaveListItem>
          </NavLink>
        )
      }}
    </CardContext.Consumer>
  )
}

export default VideosCardTwo
