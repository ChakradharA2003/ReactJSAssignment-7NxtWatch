import styled from 'styled-components'

export const SideBarContainer = styled.div`
  background-color: ${props =>
    props.bgColor === 'dark' ? '#000000' : '#f9f9f9'};
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const SideBarContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 8px;
`
export const ContactHeading = styled.p`
  color: ${props => (props.bgColor === 'dark' ? '#ffffff' : '#00306e')};
  font-size: 25px;
  font-family: 'Roboto';
  font-weight: 600;
`
export const SocialMediaLogos = styled.ul`
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
export const LogoImage = styled.img`
  height: 45px;
  width: 45px;
  margin: 9px;
`
export const ContactDescription = styled.p`
  color: ${props => (props.bgColor === 'dark' ? '#ffffff' : '#383838')};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 450;
`
