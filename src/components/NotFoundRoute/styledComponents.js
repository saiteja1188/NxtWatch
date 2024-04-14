import styled from 'styled-components/macro'

export const NotFoundContainer = styled.div`
  display: flex;
  width: 100vw;
  min-height: 90vh;
`
export const NotFoundContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${props => props.bgColor};
`
export const NotFoundImg = styled.img`
  width: 300px;
`
export const NotFoundHeading = styled.h1`
  font-family: roboto;
  font-size: 24px;
  color: ${props => props.textColor};
`
export const NotFoundDesc = styled.p`
  font-size: 16px;
  font-family: roboto;
  color: ${props => props.descColor};
`
