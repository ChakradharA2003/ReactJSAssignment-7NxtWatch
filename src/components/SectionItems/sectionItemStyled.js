import styled from 'styled-components'

export const SectionItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  width: 100%;
`
export const LinkItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  background-color: ${props =>
    props.bgColor === 'Active' ? '#e2e8f0' : '#f9f9f9'};
  width: 100%;
  height: 40px;
  padding: 4px 15px 4px;
  margin-top: 2px;
  margin-bottom: 2px;
`
export const LinkName = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: ${props => (props.fontWeight === 'High' ? 'bold' : 300)};
  margin-left: 24px;
`
export const Button = styled.button`
  background-color: transparent;
  border-width: 0px;
  width: 100%;
  cursor: pointer;
`
