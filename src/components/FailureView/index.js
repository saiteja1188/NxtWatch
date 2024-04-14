import CartContext from '../../Context/CardContext'

import {
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailureDesc,
  RetryButton,
} from './styledComponents'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f1f5f9' : '#1e293f'
        const descColor = isDarkTheme ? '#e2e8f8' : '#475569'

        const failureImgUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <>
            <FailureContainer>
              <FailureImg src={failureImgUrl} alt="failure view" />
              <FailureHeading textColor={textColor}>
                OOps! Something Went Wrong
              </FailureHeading>
              <FailureDesc descColor={descColor}>
                We are having some trouble to complete your request. Please try
                again.
              </FailureDesc>
              <RetryButton type="button" onClick={onClickRetry}>
                Retry
              </RetryButton>
            </FailureContainer>
          </>
        )
      }}
    </CartContext.Consumer>
  )
}

export default FailureView
