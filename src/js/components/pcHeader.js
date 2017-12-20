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
  Radio,
  Checkbox
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
//const WrappedDynamicRule = Form.create()(pcHeader);
class pcHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'mail',
      hasLogined: false,
      visible: false,
      loading: false,
      formLayout: 'vertical'
    }
  };

  showModal() {
    this.setState({visible: true});
  };

  handleOk(e) {
    //console.log(e);
    this.setState({visible: false});
    /*this.props.form.validateFields((err,values) => {
      if (!err) {
        console.info('success');
        console.log(values);
      }
    });*/
  };

  handleCancel(e) {
  //  console.log(e);
    this.setState({visible: false});
    this.props.form.resetFields();
  };

  handleClick(e) {
  //  console.log('click ', e);
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
  login() {
    this.props.form.validateFields(['username','password'],(err,values) => {
      if (!err) {
        console.info('success');
<<<<<<< HEAD
        console.log(values);
        this.setState({visible: false});
      }
    });
    console.log(this.props.form.getFieldsValue(['username','password']));
  }
register(){
  this.props.form.validateFields(['account','registerPassword','sureRegisterPassword'],(err,values) => {
    if (!err) {
      console.info('success');
      console.log(values);
      this.setState({visible: false});
    }
  });
}

  render() {
    /*console.log(this);
    console.log(this.state.visible);*/
    const myHorizontalLoginForm = Form.create()(pcHeader);
    const userShow = this.state.hasLogined
      ? <Menu.Item key="logout" className="fr">
          <Button type="primary">Primary</Button>
          <Button type="dashed">Dashed</Button>
          <Button>Default</Button>
        </Menu.Item>
      : <Menu.Item key="logoIn" className="fr">
        <Icon type="appstore"/>注册/登录
      </Menu.Item>;
    const formLayout = this.state.formLayout;
    //console.log(this.props);
    const {getFieldDecorator} = this.props.form;
   //console.log({getFieldDecorator});
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
              /*<Button key="back" onClick={this.handleCancel.bind(this)}>返回</Button>,
              <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk.bind(this)}>
                登录
              </Button>*/
            ]}>
            <Tabs onChange={this.changeLogin.bind(this)} type="card">
              <TabPane tab="登录" key="1">
                <Form layout={formLayout}>
                  <FormItem label="用户名" >
                    {
                      getFieldDecorator('username', {
                        rules: [
                          {
                            required: true,
                            min:4,
                            message: '必填且最小是四个字符'
                          },
                        ],
                      })(<Input placeholder="Please input your name"/>)
                    }
                  </FormItem>
                  <FormItem label="密码">
                    {
                      getFieldDecorator('password', {
                        rules: [
                          {
                            required: true,
                            message: '密码必填且最小是四个字符'
                          }
                        ]
                      })(<Input placeholder="Please input password"/>)
                    }
                  </FormItem>
                  <FormItem>
                    <Button type="primary" htmlType="submit" onClick={this.login.bind(this)}>登录</Button>
                  </FormItem>
                </Form>
              </TabPane>
              <TabPane tab="注册" key="2">
                  <Form layout={formLayout}>
                    <FormItem label="注册">
                      {
                        getFieldDecorator('account', {
                          rules: [
                            {
                              required: true,
                              min:4,
                              message: '必填且最小是四个字符'
                            },
                          ],
                        })(<Input placeholder="请输入你的账号"/>)
                      }
                    </FormItem>
                    <FormItem label="密码">
                      {
                        getFieldDecorator('registerPassword', {
                          rules: [
                            {
                              required: true,
                              min:4,
                              message: '必填且最小是四个字符'
                            },
                          ],
                        })(<Input placeholder="请输入你的密码"/>)
                      }
                    </FormItem>
                    <FormItem label="确认密码">
                      {
                        getFieldDecorator('sureRegisterPassword', {
                          rules: [
                            {
                              required: true,
                              min:4,
                              message: '必填且最小是四个字符'
                            },
                          ],
                        })(<Input placeholder="请再次输入你的密码"/>)
                      }
                    </FormItem>
                    <FormItem>
                      <Button type="primary" onClick={this.register.bind(this)}>注册</Button>
                    </FormItem>
                  </Form>
              </TabPane>
            </Tabs>
          </Modal>
        </Col>
        <Col span={2}></Col>
      </Row>
      {/* <Link>Unstyled, boring Link</Link><bgetFieldDecoratorr/>
        <StyledLink>Styled, exciting Link</StyledLink> */
      }

    </header>)
  }
  renderContact() {}
}

const ContatoForm = Form.create({})(pcHeader);


export default ContatoForm;
=======
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
  Radio,
  Checkbox
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
//const WrappedDynamicRule = Form.create()(pcHeader);
class pcHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'mail',
      hasLogined: false,
      visible: false,
      loading: false,
      formLayout: 'vertical'
    }
  };

  showModal() {
    this.setState({visible: true});
  };

  handleOk(e) {
    //console.log(e);
    this.setState({visible: false});
    /*this.props.form.validateFields((err,values) => {
      if (!err) {
        console.info('success');
        console.log(values);
      }
    });*/
  };

  handleCancel(e) {
  //  console.log(e);
    this.setState({visible: false});
    this.props.form.resetFields();
  };

  handleClick(e) {
  //  console.log('click ', e);
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
  login() {
    this.props.form.validateFields(['username','password'],(err,values) => {
      if (!err) {
        console.info('success');
        console.log(values);
        this.setState({visible: false});
      }
    });
    console.log(this.props.form.getFieldsValue(['username','password']));
  }
register(){
  this.props.form.validateFields(['account','registerPassword','sureRegisterPassword'],(err,values) => {
    if (!err) {
      console.info('success');
      console.log(values);
      this.setState({visible: false});
    }
  });
}

  render() {
    /*console.log(this);
    console.log(this.state.visible);*/
    const myHorizontalLoginForm = Form.create()(pcHeader);
    const userShow = this.state.hasLogined
      ? <Menu.Item key="logout" className="fr">
          <Button type="primary">Primary</Button>
          <Button type="dashed">Dashed</Button>
          <Button>Default</Button>
        </Menu.Item>
      : <Menu.Item key="logoIn" className="fr">
        <Icon type="appstore"/>注册/登录
      </Menu.Item>;
    const formLayout = this.state.formLayout;
    //console.log(this.props);
    const {getFieldDecorator} = this.props.form;
   //console.log({getFieldDecorator});
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
              /*<Button key="back" onClick={this.handleCancel.bind(this)}>返回</Button>,
              <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk.bind(this)}>
                登录
              </Button>*/
            ]}>
            <Tabs onChange={this.changeLogin.bind(this)} type="card">
              <TabPane tab="登录" key="1">
                <Form layout={formLayout}>
                  <FormItem label="用户名" >
                    {
                      getFieldDecorator('username', {
                        rules: [
                          {
                            required: true,
                            min:4,
                            message: '必填且最小是四个字符'
                          },
                        ],
                      })(<Input placeholder="Please input your name"/>)
                    }
                  </FormItem>
                  <FormItem label="密码">
                    {
                      getFieldDecorator('password', {
                        rules: [
                          {
                            required: true,
                            message: '密码必填且最小是四个字符'
                          }
                        ]
                      })(<Input placeholder="Please input password"/>)
                    }
                  </FormItem>
                  <FormItem>
                    <Button type="primary" htmlType="submit" onClick={this.login.bind(this)}>登录</Button>
                  </FormItem>
                </Form>
              </TabPane>
              <TabPane tab="注册" key="2">
                  <Form layout={formLayout}>
                    <FormItem label="注册">
                      {
                        getFieldDecorator('account', {
                          rules: [
                            {
                              required: true,
                              min:4,
                              message: '必填且最小是四个字符'
                            },
                          ],
                        })(<Input placeholder="请输入你的账号"/>)
                      }
                    </FormItem>
                    <FormItem label="密码">
                      {
                        getFieldDecorator('registerPassword', {
                          rules: [
                            {
                              required: true,
                              min:4,
                              message: '必填且最小是四个字符'
                            },
                          ],
                        })(<Input placeholder="请输入你的密码"/>)
                      }
                    </FormItem>
                    <FormItem label="确认密码">
                      {
                        getFieldDecorator('sureRegisterPassword', {
                          rules: [
                            {
                              required: true,
                              min:4,
                              message: '必填且最小是四个字符'
                            },
                          ],
                        })(<Input placeholder="请再次输入你的密码"/>)
                      }
                    </FormItem>
                    <FormItem>
                      <Button type="primary" onClick={this.register.bind(this)}>注册</Button>
                    </FormItem>
                  </Form>
              </TabPane>
            </Tabs>
          </Modal>
        </Col>
        <Col span={2}></Col>
      </Row>
      {/* <Link>Unstyled, boring Link</Link><bgetFieldDecoratorr/>
        <StyledLink>Styled, exciting Link</StyledLink> */
      }

    </header>)
  }
  renderContact() {}
}

const ContatoForm = Form.create({})(pcHeader);


export default ContatoForm;
>>>>>>> before discard
