import React from "react";
import { Row, Col } from 'antd';
import styled from 'styled-components';

const FooterCol = styled.footer`
    text-align: center;
    font-size: 0.24rem;
    .footer{
      color: #2db7f5;
    }
`;
export default class footer extends React.Component{
  constructor(){
    super();
  };
  render(){
    return(
      <FooterCol>
        <Row>
            <Col span={2}></Col>
            <Col span={20} class="footer">
              &copy;&nbsp;2016 ReactNews. All Rights Reserved.
            </Col>
            <Col span={2}></Col>
        </Row>
      </FooterCol>
    )
  };
}
