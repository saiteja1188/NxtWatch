import styled from 'styled-components/macro'

export const SavedVideoContainer = styled.div`
  display: flex;

  width: 100%;
  min-height: 90vh;
  background-color: ${props => props.bgColor};
`
export const SavedContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const SuccessTop = styled.div`
  display: flex;
  align-items: center;
  background-color: #ebebeb;
  padding-left: 50px;
`
export const TopHeading = styled.h1`
  font-family: roboto;
  font-size: 36px;
  font-weight: 500;
  margin-left: 20px;
`
export const IconTrend = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d7dfe9;
  border-radius: 50%;
  height: 50px;
  width: 50px;
`
export const SavedVideoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: ${props => props.bgColor};
  width: 100%;
  padding-top: 20px;
  padding-bottom: 50px;
  margin-top: 0px;
`

export const SuccessNoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const NoVideoHeading = styled.h1`
  font-family: roboto;
  font-size: 32px;
  font-weight: 500;
  color: ${props => props.textColor};
`

export const Desc = styled.p`
  font-family: roboto;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.textColor};
`
export const RetryButton = styled.button`
  border: none;
  outline: none;
  border-radius: 10px;
  font-family: roboto;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  background-color: #4f46e5;
  padding: 8px 15px;
`
export const NoImage = styled.img`
  width: 300px;
`
