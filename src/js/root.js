import React from 'react';
import ReactDom from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import { Button } from 'antd';
export default class Root extends React.Component{
   render(){
     return(
       <div>
         
      </div>
     )
   }
}
ReactDom.render(<Root/>,document.getElementById('app'));
