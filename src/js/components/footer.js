import React from "react";
import { Row, Col } from 'antd';
import styled from 'styled-components';
const Footer = styled.footer`
  text-align: center;
  font-size: 0.24rem;
`;
export default class footer extends React.Component{
    constructor(){
      super();
    };

    render(){
      return(
          <Footer>
            <Row>
              <Col span={2}></Col>
              <Col span={20} class="footer">
                &copy;&nbsp;2016 ReactNews. All Rights Reserved.
              </Col>
              <Col span={2}></Col>
            </Row>
          </Footer>
      )
    }
}
