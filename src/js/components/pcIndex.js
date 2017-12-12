import  React from 'react';
import PcHeader from './pcHeader';
import Footer from './footer'
export default class pcIndex extends React.Component{
  render(){
    return(
        <div>
            <PcHeader/>
            <Footer/>
        </div>
    )
  }
}
