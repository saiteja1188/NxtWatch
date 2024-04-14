import {formatDistanceToNow} from 'date-fns'

import CardContext from '../../Context/CardContext'

import {
  ListItem,
  ListImage,
  ListContent,
  ListProfile,
  CardText,
  TextTitle,
  TitleAndView,
  NavLink,
  TextDesc,
} from './styledComponents'

const VideosCard = props => {
  const {sDetails} = props
  const {id, title, thumbnailUrl, channel, publishedAt, viewCount} = sDetails
  return (
    <CardContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f1f5f9' : '#1e293f'
        const descColor = isDarkTheme ? '#e2e8f8' : '#475569'

        const dateAgo = formatDistanceToNow(new Date(publishedAt))

        return (
          <NavLink to={`videos/${id}`} className="link">
            <ListItem>
              <ListImage src={thumbnailUrl} alt="video thumbnail" />
              <ListContent>
                <div>
                  <ListProfile
                    src={channel.profileImageUrl}
                    alt="channel logo"
                  />
                </div>
                <CardText>
                  <TextTitle textColor={textColor}>{title}</TextTitle>
                  <TitleAndView>
                    <TextDesc descColor={descColor}>{channel.name}</TextDesc>
                    <TextDesc descColor={descColor}>
                      {viewCount} View . {dateAgo}
                    </TextDesc>
                  </TitleAndView>
                </CardText>
              </ListContent>
            </ListItem>
          </NavLink>
        )
      }}
    </CardContext.Consumer>
  )
}

export default VideosCard
