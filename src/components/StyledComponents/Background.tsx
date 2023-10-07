import styled from "styled-components";

interface Props {
    centered?:boolean
    color?:string
}

const Background = styled.div<Props>`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.color ? props.color : 'black'};
  display: ${props => props.centered ? `flex` : 'block'};
  justify-content: ${props => props.centered ? `center` : 'start'};
  align-items: ${props => props.centered ? `center` : 'start'};
`
export {Background}