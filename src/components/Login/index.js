import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LoginContainer,
  LoginCard,
  NxtWatchLogo,
  LoginElement,
  LabelElement,
  InputElement,
  LoginForm,
  PasswordEnabler,
  PasswordCheck,
  PasswordLabel,
  LoginButton,
  ErrorMessage,
} from './loginStyle'

class Login extends Component {
  state = {
    passwordStyle: 'password',
    username: '',
    password: '',
    errorMessage: '',
  }

  onShowPassword = event => {
    if (event.target.checked) {
      this.setState({passwordStyle: 'text'})
    } else {
      this.setState({passwordStyle: 'password'})
    }
  }

  onchangeUsername = event => {
    this.setState({username: event.target.value, errorMessage: ''})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value, errorMessage: ''})
  }

  onLoginSuccess = jwtToken => {
    // console.log(jwtToken)
    Cookies.set('jwt_token', jwtToken, {expires: 1})
    const {history} = this.props
    history.replace('/')
  }

  onLoginFailure = message => {
    // console.log(message.error_msg)
    this.setState({errorMessage: String('*') + message.error_msg})
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    // console.log(username, password)
    const loginApi = 'https://apis.ccbp.in/login'
    const userCredentials = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userCredentials),
    }
    const response = await fetch(loginApi, options)
    const data = await response.json()
    // console.log(data.jwt_token)
    // console.log(response)
    if (response.ok) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data)
    }
  }

  render() {
    const {passwordStyle, username, password, errorMessage} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer>
        <LoginCard>
          <NxtWatchLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <LoginForm onSubmit={this.onSubmitLoginForm}>
            <LoginElement>
              <LabelElement htmlFor="username">USERNAME</LabelElement>
              <InputElement
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={this.onchangeUsername}
              />
            </LoginElement>
            <LoginElement>
              <LabelElement htmlFor="password">PASSWORD</LabelElement>
              <InputElement
                id="password"
                type={passwordStyle}
                placeholder="Password"
                value={password}
                onChange={this.onChangePassword}
              />
            </LoginElement>
            <PasswordEnabler>
              <PasswordCheck
                type="checkbox"
                id="password-checkbox"
                onChange={this.onShowPassword}
              />
              <PasswordLabel htmlFor="password-checkbox">
                Show Password
              </PasswordLabel>
            </PasswordEnabler>
            <LoginButton type="submit" onClick={this.onSubmitLoginForm}>
              Login
            </LoginButton>
            <ErrorMessage>{errorMessage}</ErrorMessage>
          </LoginForm>
        </LoginCard>
      </LoginContainer>
    )
  }
}
export default Login
