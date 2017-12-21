import React from "react";
import ModileHeader from "./mobile_header"
import MobileFooter from "../footer"
export default class modileIndex extends React.Component{
  constructor(){
    super();

  }
  render(){
    return (
      <div>
          <ModileHeader/>
          <MobileFooter/>
      </div>
    )
  }
}
