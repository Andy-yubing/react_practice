import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {Row, Col} from 'antd';
import {Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class Root extends React.Component {
  constructor() {
		super();
		this.state = {
			current: 'mail'
		};
	}
  handleClick(e){
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (<div>
      <Row>
        <Col span={2}></Col>
        <Col span={4}>
          <a href="/" class="logo">
            <img src="../images/logo.png" alt=""/>
          </a>
        </Col>
        <Col span={16}>
          <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
            <Menu.Item key="mail">
              <Icon type="mail"/>Navigation One
            </Menu.Item>
            <Menu.Item key="app" disabled="disabled">
              <Icon type="appstore"/>Navigation Two
            </Menu.Item>
            <SubMenu title={<span> < Icon type = "setting" /> Navigation Three - Submenu</span>}>
              <MenuItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
            <Menu.Item key="alipay">
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>)
  }
}
ReactDom.render(<Root/>, document.getElementById('app'));
