import React from 'react';
import {
  Row,
  Col,
  Menu,
  Icon,
  Modal,
  Button,
  Tabs,
  Form,
  Input,
  Radio
} from 'antd';
import styled from 'styled-components';
import PasswordInput from './styleComponent/PasswordInput';
import {Link, StyledLink} from './styleComponent/aLink'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Wrapper = styled.section `
margin: 0 auto;
width: 300px;
text-align: center;
`;
const ImgTop = styled.img `
    width: 30px;
    margin-right: 10px;
`;
const Atop = styled.a `
  display: block;
  margin-top: 10px;
  >span{
    font-size: 16px;
  }
`;

export default class pcHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'mail',
      hasLogined: false,
      visible: false,
      loading: false,
      formLayout: 'horizontal',
    }
  };

  showModal() {
    this.setState({visible: true});
  };

  handleOk(e) {
    console.log(e);
    this.setState({visible: false});
  };

  handleCancel(e) {
    console.log(e);
    this.setState({visible: false});
  };

  handleClick(e) {
    console.log('click ', e);
    this.setState({current: e.key});
    if (e.key == "logoIn") {
      this.showModal();
    }
    // console.log(this.state.visible);
  };
  //切换注册登录
  changeLogin(key) {
    console.log(key);
  };

  //当前输入的值
  handleFormLayoutChange(e){
    this.setState({ formLayout: e.target.value });
  };

  render() {
    console.log(this);
    console.log(this.state.visible);
    const userShow = this.state.hasLogined
      ? <Menu.Item key="logout" className="fr">
          <Button type="primary">Primary</Button>
          <Button type="dashed">Dashed</Button>
          <Button>Default</Button>
        </Menu.Item>
      : <Menu.Item key="logoIn" className="fr">
        <Icon type="appstore"/>注册/登录
      </Menu.Item>;

    const { formLayout } = this.state;
    

    return (<header>
      <Row>
        <Col span={2}></Col>
        <Col span={4}>
          <Atop href="/">
            <ImgTop src='/src/images/logo.png' alt="logo"/>
            <span>ReactNews</span>
          </Atop>
        </Col>
        <Col span={16}>
          <Menu onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]} mode="horizontal">
            <Menu.Item key="mail">
              <Icon type="mail"/>头条
            </Menu.Item>
            <Menu.Item key="app">
              <Icon type="qq" style={{
                  fontSize: 16,
                  color: '#08c'
                }}/>社会
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
            {/* <PasswordInput name="password" size="0.2em"/> */}
            {userShow}
          </Menu>

          <Modal visible={this.state.visible} title="用户中心" onOk={this.handleOk} onCancel={this.handleCancel.bind(this)} footer={[
              <Button key="back" onClick={this.handleCancel.bind(this)}>Return</Button>,
              <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk.bind(this)}>
                Submit
              </Button>
            ]}>
            <Tabs onChange={this.changeLogin.bind(this)} type="card">
              <TabPane tab="登录" key="1">
                <Form layout={formLayout}>
                  <FormItem label="Field A" {...formItemLayout}>
                    <Input placeholder="input placeholder"/>
                  </FormItem>
                  <FormItem label="Field B" {...formItemLayout}>
                    <Input placeholder="input placeholder"/>
                  </FormItem>
                  <FormItem {...buttonItemLayout}>
                    <Button type="primary">Submit</Button>
                  </FormItem>
                </Form>
              </TabPane>
              <TabPane tab="注册" key="2">
                <p>注册</p>
              </TabPane>
            </Tabs>
          </Modal>
        </Col>
        <Col span={2}></Col>
      </Row>
      {/* <Link>Unstyled, boring Link</Link><br/>
        <StyledLink>Styled, exciting Link</StyledLink> */
      }
    </header>)
  }

  renderContact() {}

}
