import  React from 'react';
import PcHeader from "./pcHeader"
import PcFooter from "../footer"
export default class pcIndex extends React.Component{
  render(){
    return(
        <div>
            <PcHeader/>
            <PcFooter/>
        </div>
    )
  }
}
