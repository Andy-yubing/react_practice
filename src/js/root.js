import React from 'react';
import ReactDom from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import PCIndex from './components/pcIndex';
export default class Root extends React.Component{
   render(){
     return(
       <div>
         <PCIndex/>
       </div>
     )
   }
}
ReactDom.render(<Root/>, document.getElementById('app'));
