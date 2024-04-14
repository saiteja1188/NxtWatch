import {formatDistanceToNow} from 'date-fns'

import CardContext from '../../Context/CardContext'
import {
  ListItem,
  ListImage,
  ListContent,
  CardText,
  TextTitle,
  TitleAndView,
  TextTitleHeading,
  ListProfile,
  NavLink,
} from './styledComponents'

const VideosCardTwo = props => {
  const {vDetails} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = vDetails

  return (
    <CardContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f1f5f9' : '#1e293f'
        const descColor = isDarkTheme ? '#e2e8f8' : '#475569'
        const dateAgo = formatDistanceToNow(new Date(publishedAt))
        return (
          <NavLink to={`/videos/${id}`}>
            <ListItem>
              <ListImage src={thumbnailUrl} alt={title} />
              <ListContent>
                <div>
                  <ListProfile
                    src={channel.profileImageUrl}
                    alt={channel.name}
                  />
                </div>
                <CardText>
                  <TextTitleHeading textColor={textColor}>
                    {title}
                  </TextTitleHeading>
                  <TitleAndView>
                    <TextTitle descColor={descColor}>{channel.name}</TextTitle>
                    <TextTitle descColor={descColor}>
                      {viewCount} View . {dateAgo}
                    </TextTitle>
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

export default VideosCardTwo
