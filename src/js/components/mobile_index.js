import React from "react";
import ModileHeader from "./mobile_header"
import Footer from './footer'
export default class modileIndex extends React.Component{
  constructor(){
    super();

  }
  render(){
    return (
      <div>
          <ModileHeader/>
          <Footer/>
      </div>
    )
  }
}
