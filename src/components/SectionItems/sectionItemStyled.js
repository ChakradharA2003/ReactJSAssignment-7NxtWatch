import styled from 'styled-components'

export const SectionItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  width: 100%;
`
export const LinkItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  background-color: ${props => {
    if (props.linkItemBgColor === 'dark' && props.bgColor === 'Active') {
      return '#424242'
    }
    if (props.linkItemBgColor === 'dark' && props.bgColor === 'Inactive') {
      return '#0f0f0f'
    }
    if (props.linkItemBgColor === 'light' && props.bgColor === 'Active') {
      return '#e2e8f0'
    }
    if (props.linkItemBgColor === 'light' && props.bgColor === 'Inactive') {
      return '#f9f9f9'
    }
    return ''
  }};
  width: 100%;
  height: 40px;
  padding: 4px 15px 4px;
  margin-top: 2px;
  margin-bottom: 2px;
`
export const LinkName = styled.p`
  color: ${props => (props.linkItemBgColor === 'dark' ? '#ffffff' : '#475569')};
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
