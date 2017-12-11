import React from "react";

export default class mobileHeader extends React.Component{
  constructor(){
    super()
  }
  render(){
    return (
      <div>
        <header>
           <img src="./src/images/logo.png" alt="logo"/>
           <span>ReactNews</span>
         </header>
      </div>
    )
  }
}
