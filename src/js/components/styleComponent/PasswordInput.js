import styled from "styled-components";

const Input = styled.input.attrs({
  type:'password',
  padding: props => props.size || '0.5em',
  margin: props => props.size || '0.5em',
})`
  border: 2px solid #dedede;
  border-radius: 5px;
  color: #4a4a4a;
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;
export default Input;
