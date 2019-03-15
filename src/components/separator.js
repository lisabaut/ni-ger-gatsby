import styled from 'styled-components'

const Separator = styled.span`
  display: block;
  margin: 20px auto 45px;
  width: 205px;
  height: 2px;
  background: ${ props => props.theme.primary };
`

export default Separator
