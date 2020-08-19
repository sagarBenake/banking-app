import React, { Component, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Input, Button, Checkbox, Row, Col, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import * as ActionCreator from '../../Store/Action/CustomerInfo';
// import { useDispatch, useStore } from 'react-redux';
import { render } from '@testing-library/react';
import {
   withRouter
  } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:"",
            password:""
        }
    } 

    // onsubmit Login
     onLoginSubmit=()=>{
      const {username,password}=this.state;
       if(username && password){
        this.props.updateAuthStatus(true);
        this.props.history.push({pathname:'/dashboard'})
       }
    }

      handleInputChange = (e,name) => this.setState({
      ...this.state,
      [name]: e
    })

    navigateToRegisterForm=()=>{
        this.props.history.push({pathname:'/registration'})
    }

    render() {
        console.log("props data");
        console.log(this.props);
        return (
            <div>
                <Row style={{ justifyContent: 'center' }}>
                    <Card style={{ width: 400, marginTop: "5%" }}>
                        <p><b>Welcome to Bank Management System</b></p>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={() => this.onLoginSubmit()}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Username!',
                                    },
                                ]}
                            >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} 
                                placeholder="Username"
                                value={this.state.username}
                                onChange={(e) => this.handleInputChange(e.target.value, "username")}
                            />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Password!',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    value={this.state.password}
                                    placeholder="Password"
                                    onChange={(e) => this.handleInputChange(e.target.value, "password")}
                                />
                            </Form.Item>

                            <Form.Item>
                                {/* <div> */}
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                                {/* </div> */}
                                <div style={{ marginTop: 10 }}>
                                    <Button onClick={this.navigateToRegisterForm}>New Registration</Button>
                                </div>
                            </Form.Item>
                        </Form>
                    </Card>
                </Row>
            </div>
        );
    }
}


// export default Login;

function mapStateToProps(state) {
    console.log("state.BankingStore");
    console.log(state.BankingStore);
    return state.BankingStore;
}

function dispatchStartProps(dispatch) {
    return {
        updateAuthStatus: (text) => dispatch(ActionCreator.updateAuthStatus(text))
    }
}

export default connect(mapStateToProps, dispatchStartProps)(withRouter(Login));