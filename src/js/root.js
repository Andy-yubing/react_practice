import React from 'react';
import ReactDom from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import styled from 'styled-components';
import PCIndex from './components/pcIndex';
import MobileIndex from './components/mobile_index'
import MediaQuery from 'react-responsive';

export default class Root extends React.Component{
   render(){
     return(
       <div>
         <MediaQuery query="(min-device-width: 1224px)">
             <PCIndex/>
         </MediaQuery>
         <MediaQuery query="(max-device-width: 1224px)">
             <MobileIndex/>
         </MediaQuery>
       </div>
     )
   }
}
ReactDom.render(<Root/>, document.getElementById('app'));
