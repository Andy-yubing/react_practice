import  React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';
import styled from 'styled-components';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Wrapper = styled.section`
margin: 0 auto;
width: 300px;
text-align: center;
`;
const Button = styled.button`
width: 100px;
color: white;
background: skyblue;
`;
const ImgTop = styled.img`
    width: 30px;
    margin-right: 10px;
`;
const Atop = styled.a`
  margin-top: 10px;
  >span{
    font-size: 16px;
  }
`;
export default class pcHeader extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      current: 'mail',
    }
  }
  handleClick(e){
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render(){
    console.log(this);
    return(
      <header>
        <Row>
          <Col span={2}>
            {/* <Wrapper>
              <Button>Hello World</Button>
            </Wrapper> */}
          </Col>
          <Col span={4}>
              <Atop href="/">
                <ImgTop src='/src/images/logo.png' alt="logo" />
                <span>头部</span>
              </Atop>
          </Col>
          <Col span={16}>
            <Menu
                onClick={this.handleClick.bind(this)}
                selectedKeys={[this.state.current]}
                mode="horizontal">
                <Menu.Item key="mail">
                  <Icon type="mail" />头条
                </Menu.Item>
                <Menu.Item key="app">
                  <Icon type="qq" style={{ fontSize: 16, color: '#08c' }} />社会
                </Menu.Item>
                <Menu.Item key="guonei">
								<Icon type="appstore"/>国内
  							</Menu.Item>
  							<Menu.Item key="guoji">
  								<Icon type="appstore"/>国际
  							</Menu.Item>
  							<Menu.Item key="yule">
  								<Icon type="appstore"/>娱乐
  							</Menu.Item>
  							<Menu.Item key="tiyu">
  								<Icon type="appstore"/>体育
  							</Menu.Item>
  							<Menu.Item key="keji">
  								<Icon type="appstore"/>科技
  							</Menu.Item>
  							<Menu.Item key="shishang">
  								<Icon type="appstore"/>时尚
  							</Menu.Item>
            </Menu>
          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
    )
  }
}
