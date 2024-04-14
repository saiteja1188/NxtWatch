import {Component} from 'react'

import Cookies from 'js-cookie'

import {
  LoginRouteContainer,
  FormContainer,
  LogoImage,
  // INPUT USER FIELD //
  InputContainer,
  InputLabel,
  UserInput,
  // checkbox field //
  CheckboxContainer,
  Checkbox,
  ShowPassword,
  LoginButton,
  SubmitError,
} from './styledComponents'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
    showErrorMsg: false,
  }

  onShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onChangePasswordInput = event => {
    this.setState({password: event.target.value})
  }

  onChangeUsernameInput = event => {
    this.setState({
      username: event.target.value,
    })
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state
    const typeInput = showPassword ? 'text' : 'password'
    return (
      <>
        <InputLabel htmlFor="password">PASSWORD</InputLabel>
        <UserInput
          type={typeInput}
          id="password"
          value={password}
          placeholder="Password"
          onChange={this.onChangePasswordInput}
        />
        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            id="checkbox"
            onChange={this.onShowPassword}
          />
          <ShowPassword htmlFor="checkbox">Show Password</ShowPassword>
        </CheckboxContainer>
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <InputLabel htmlFor="username">USERNAME</InputLabel>
        <UserInput
          type="text"
          id="username"
          value={username}
          placeholder="Username"
          onChange={this.onChangeUsernameInput}
        />
      </>
    )
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState(prevState => ({
      showErrorMsg: !prevState.showErrorMsg,
      errorMsg,
    }))
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {showErrorMsg, errorMsg} = this.state
    return (
      <LoginRouteContainer>
        <FormContainer onSubmit={this.onSubmitForm}>
          <LogoImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <InputContainer>{this.renderUsernameField()}</InputContainer>
          <InputContainer>{this.renderPasswordField()}</InputContainer>
          <LoginButton type="submit">Login</LoginButton>
          {showErrorMsg && <SubmitError>*{errorMsg}</SubmitError>}
        </FormContainer>
      </LoginRouteContainer>
    )
  }
}

export default LoginRoute
