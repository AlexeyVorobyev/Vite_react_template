import styled from "styled-components";

interface Props {
    color?: string
    hoveredColor?:string
    alignSelf?: 'center' | 'start' | 'end'
    width?: string
}

const StyledButton = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 10px;
  background-color: ${props => props.color ? props.color : '#000000'};
  border:none;
  align-self: ${props => props.alignSelf ? props.alignSelf : 'center'};
  width: ${props => props.width ? props.width : '100%'};
  
  &:hover {
    background-color: ${props => props.hoveredColor ? props.hoveredColor : '#222222'};
    cursor: pointer;
  }
`

export {StyledButton}