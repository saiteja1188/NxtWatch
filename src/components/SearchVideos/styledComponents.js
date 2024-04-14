import styled from 'styled-components/macro'

export const SearchAndVideoContainer = styled.div`
  width: 100wh;
  background-color: ${props => props.bgColor};
  padding-top: 10px;
  padding: 30px;
`

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #cbd5e1;
  width: 100%;
  background-color: ${props => props.bgColor};
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const SearchInput = styled.input`
  width: 90%;
  border: none;
  outline: none;
  padding: 6px 10px;
  font-family: roboto;
  font-size: 16px;
  background-color: ${props => props.bgColor};
  color: ${props => props.textColor};
`
export const SearchButton = styled.button`
  padding: 6px 30px;
  background-color: #7e858e;
  border-right: none;
  border-top: none;
  border-bottom: none;
  color: #ffffff;
  font-size: 24px;
`
// No Videos //

export const SuccessNoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background-color: ${props => props.bgColor};
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
  color: ${props => props.textColor};
  background-color: #4f46e5;
  padding: 8px 15px;
`
export const NoImage = styled.img`
  width: 300px;
`
// success videos //

export const SuccessVideoContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${props => props.bgColor};
  padding-top: 20px;
  padding-left: 0px;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FailedContainer = styled.div`
  display: flex;
  width: 100%;
`
