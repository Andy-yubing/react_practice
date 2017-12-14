import styled from "styled-components";

const Input = styled.input.attrs({
  type:'password',
  padding: props => props.size || '0.5em',
  margin: props => props.size || '0.5em',
  height: props => props.height || '2em',
})`
  border: 2px solid #dedede;
  border-radius: 5px;
  color: #4a4a4a;
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  height: ${props => props.height};
`;
export default Input;
