import styled from 'styled-components'

export const NotFoundMainContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const SectionsList = styled.div`
  width: 30%;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    display: none;
  }
`

export const NotFoundDetailsContainer = styled.div`
  background-color: #f1f1f1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  @media screen and (max-width: 767px) and (orientation: portrait) {
    height: 100vh;
  }
`
export const NotFoundImage = styled.img`
  height: 500px;
  width: 500px;
  @media screen and (max-width: 767px) and (orientation: portrait) {
    height: 300px;
    width: 300px;
  }
`
export const NotFoundHeading = styled.h1`
  color: #000000;
`
export const NotFoundDescription = styled.p`
  color: #212121;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`
