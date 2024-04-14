import styled from 'styled-components/macro'

export const GamingContainer = styled.div`
  display: flex;
  width: 100vw;
  min-height: 90vh;
`
export const LoadingContainer = styled.div``
export const TrendingContainer = styled.div`
  width: 100%;
  overflow-y: auto;
  background-color: ${props => props.bgColor};
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SuccessVideoContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: ${props => props.bgColor};
  width: 100%;
  padding-top: 20px;
  padding-bottom: 50px;
  margin-top: 0px;
`

export const TrendingSidebarContainer = styled.div`
  display: none;
  width: 25%;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const TrendingMainContainer = styled.div`
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
export const FailedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
`
