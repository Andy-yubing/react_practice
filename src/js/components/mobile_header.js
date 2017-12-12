import React from "react";
import styled from 'styled-components';
import "../../lib/rem"
const MobileHeader = styled.header`
      padding: 0.2rem;
      border-bottom: 1px solid #2db7f5;
      background: #f6f6f6;
      img {
        width: 0.4rem;
      }
      span{
        font-size: 0.24rem;
        margin-left: 0.2rem;
      }
`;
export default class mobileHeader extends React.Component{
  constructor(){
    super()
  }
  render(){
    return (
      <div>
        <MobileHeader>
           <img src="./src/images/logo.png" alt="logo"/>
           <span>ReactNews</span>
         </MobileHeader>
      </div>
    )
  }
}
