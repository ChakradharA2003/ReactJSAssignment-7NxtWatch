import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: #f8fafc;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoginCard = styled.div`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    padding: 10px;
    margin: 10px;
  }
`
export const NxtWatchLogo = styled.img`
  height: 40px;
  width: 200px;
  margin-top: 20px;
`
export const LoginForm = styled.form`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const LoginElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 15px;
`
export const LabelElement = styled.label`
  color: #94a3b8;
  font-family: 'Roboto';
  font-size: 15px;
`
export const InputElement = styled.input`
  border: 1px solid #475569;
  width: 300px;
  height: 35px;
  padding: 10px;
  font-size: 15px;
  outline: none;
`
export const PasswordEnabler = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  align-self: flex-start;
`
export const PasswordLabel = styled.label`
  color: #181818;
  font-family: 'Roboto';
  font-weight: 500;
`
export const PasswordCheck = styled.input`
  outline: none;
  cursor: pointer;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  align-self: stretch;
  text-align: center;
  color: #ffffff;
  font-family: 'Roboto';
  margin-top: 25px;
  border-width: 0px;
  border-radius: 12px;
  font-size: 16px;
  padding: 10px;
  cursor: pointer;
`
export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 12px;
  align-self: flex-start;
`
