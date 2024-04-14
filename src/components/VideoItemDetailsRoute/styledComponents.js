import styled from 'styled-components/macro'

export const VideoDetailsContainer = styled.div`
  display: flex;
  width: 100vw;
  min-height: 90vh;
`
export const VideoDetailsSidebar = styled.div`
  display: none;
  width: 25%;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const VideoMainContent = styled.div`
  width: 100%;
  background-color: ${props => props.bgColor};
`
export const VideoDetailsSuccess = styled.div`
  padding: 30px 20px;
`
export const VideoDetailsTitle = styled.h1`
  font-family: roboto;
  font-size: 24px;
  font-weight: 500;
  color: ${props => props.textColor};
`

export const VideoDetailsContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ViewAndPublishedContainer = styled.div`
  display: flex;
`
export const ViewCount = styled.p`
  font-family: roboto;
  font-size: 16px;
  margin-right: 10px;
  color: ${props => props.descColor};
`
export const Published = styled.p`
  font-family: roboto;
  font-size: 16px;
  margin-right: 10px;
  color: ${props => props.descColor};
`
export const LikeDesLikeSaveContainer = styled.div`
  display: flex;
  margin-top: 20px;
`
export const IconButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;
  margin-right: 10px;
  color: ${props => props.color};
`
export const IconDesc = styled.p`
  margin-left: 5px;
  font-family: roboto;
  font-size: 18px;
`
export const VideoDetailsBottom = styled.div`
  display: flex;
  margin-top: 30px;
`
export const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`
export const BottomContent = styled.div``
export const TitleName = styled.p`
  font-family: roboto;
  font-size: 16px;
  color: ${props => props.textColor};
`
export const TitleSubscribe = styled.p`
  font-family: roboto;
  font-size: 14px;
  color: ${props => props.descColor};
`
export const Description = styled.p`
  font-family: roboto;
  font-size: 16px;
  color: ${props => props.textColor};
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FailedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
`
