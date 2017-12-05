import  React from 'react';
import { Row, Col } from 'antd';

export default class pcHeader extends React.Component{
  render(){
    return(
      <header>
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
              <img src='/src/images/logo.png' />
              <span>头部</span>
          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
    )
  }
}
