import CardContext from '../../Context/CardContext'

import {
  NavLink,
  ListItem,
  ListImage,
  CardText,
  TextTitle,
  TextTitleHeading,
} from './styledComponents'

const VideosCardTwo = props => {
  const {videosDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videosDetails

  return (
    <CardContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        const descColor = isDarkTheme ? '#94a3b8' : '#475569'

        return (
          <NavLink to={`/videos/${id}`} className="link">
            <ListItem>
              <ListImage
                src={thumbnailUrl}
                alt="video thumbnail"
                key="thumbnail_url"
              />
              <CardText>
                <TextTitleHeading textColor={textColor} key="title">
                  {title}
                </TextTitleHeading>
                <TextTitle descColor={descColor}>
                  {viewCount} Watching Worldwide
                </TextTitle>
              </CardText>
            </ListItem>
          </NavLink>
        )
      }}
    </CardContext.Consumer>
  )
}

export default VideosCardTwo
