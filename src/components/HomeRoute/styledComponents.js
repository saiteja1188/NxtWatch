import styled from 'styled-components/macro'

export const HomeContainer = styled.div`
  display: flex;
  width: 100vw;
  min-height: 90vh;
`
export const HomeSidebarContainer = styled.div`
  display: none;
  width: 25%;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const HomeMainContainer = styled.div`
  width: 100%;
`
export const BannerImageContainer = styled.div`
  display: ${props => props.display};
  justify-content: space-between;
  align-items: flex-start;
  padding: 30px;
  width: 100%;
  @media screen and (min-width: 768px) {
    background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    background-size: cover;
    width: 90%;
    height: 40vh;
  }
`
export const ModelContainer = styled.div``
export const BannerImage = styled.img`
  width: 130px;
`
export const Paragraph = styled.p`
  font-family: roboto;
  font-size: 16px;
  font-weight: 500;
  margin-top: 20px;
`
export const GetItNowButton = styled.button`
  border: 1px solid #181818;
  color: #181818;
  font-family: roboto;
  font-size: 16px;
  font-weight: 500;
  background-color: transparent;
  padding: 10px 15px;
  margin-top: 30px;
`
export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
`
