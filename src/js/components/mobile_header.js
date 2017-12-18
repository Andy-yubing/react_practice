import React from "react";
import styled from 'styled-components';
import "../../lib/rem";
const MobileHeader = styled.header `
  border-bottom: 1px solid #2db7f5;
  padding-left: 10px;
  background-color: #f6f6f6;
  img{
    width: 0.4rem;
    margin-top: 0.05rem;
  }
  span{
    font-size: 0.35rem;
    vertical-align: top;
    padding-left: 5px;
    color: #2db7f5;
  }
`;
export default class mobileHeader extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (<div>
      <MobileHeader>
        <img src="./src/images/logo.png" alt="logo"/>
        <span>ReactNews</span>
      </MobileHeader>
    </div>)
  }
}
