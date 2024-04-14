import styled from 'styled-components/macro'

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`

export const FailureImg = styled.img`
  width: 300px;
`

export const FailureHeading = styled.h1`
  font-family: roboto;
  font-size: 24px;
  font-weight: 500;
  color: ${props => props.textColor};
  text-align: center;
`

export const FailureDesc = styled.p`
  font-family: roboto;
  font-size: 22px;
  color: ${props => props.descColor};
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
  cursor: pointer;
`
