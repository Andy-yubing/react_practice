import  React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class pcHeader extends React.Component{
  state = {
    current: 'mail',
  }
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
