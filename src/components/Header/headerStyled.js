import styled from 'styled-components'

export const DesktopHeaderContainer = styled.div`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    display: none;
  }
`
export const MobileHeaderContainer = styled.div`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  @media screen and (min-width: 767px) and (orientation: landscape) {
    display: none;
  }
`
export const WebsiteLogo = styled.img`
  height: 50px;
  width: 200px;
`
export const MobileWebsiteLogo = styled.img`
  height: 30px;
  width: 100px;
`
export const HeaderOptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
export const MobileHeaderOptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
export const Buttons = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
  margin-right: 20px;
`
export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
`
export const LogoutButton = styled.button`
  background-color: transparent;
  border: 2px solid #3b82f6;
  color: #3b82f6;
  font-family: 'Roboto';
  font-weight: 500;
  text-align: center;
  padding: 10px;
  cursor: pointer;
`
export const LogoutPopUpContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    width: 100%;
    padding: 5px;
  }
`

export const PopUpQuestion = styled.p`
  color: #00306e;
  font-family: 'Roboto';
  font-size: 20px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    font-size: 12px;
  }
`
export const PopUpButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`
export const CancelButton = styled.button`
  background-color: transparent;
  border: 1px solid #94a3b8;
  color: #94a3b8;
  font-family: 'Roboto';
  font-weight: 500;
  cursor: pointer;
  font-size: 18px;
  padding: 10px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    padding: 7px;
    font-size: 12px;
  }
`
export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  border-width: 0px;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  cursor: pointer;
  font-size: 18px;
  padding: 10px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    padding: 7px;
    font-size: 12px;
  }
`
