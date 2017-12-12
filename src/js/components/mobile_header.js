import React from "react";
import styled from 'styled-components';
<<<<<<< HEAD
import "../../lib/rem";
const MobileHeader = styled.header`
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
=======
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
>>>>>>> eb55527dd643338af809b7cac922df9e9b455e62
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
