import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import {
    Form,
    Input, Layout,
    Divider,
    Tooltip,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete, InputNumber, DatePicker,
} from 'antd';
import { withRouter } from "react-router-dom";
import moment from 'moment';
import { QuestionCircleOutlined } from '@ant-design/icons';
import countries from './countrys.json'


const { TextArea } = Input;
const { Option } = Select;
const { Header, Content } = Layout;

class Registration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customerName: "",
            username: "",
            password: "",
            address: "",
            country: "",
            state: "",
            email: "",
            contactNumber: null,
            dob: "",
            customerAge: null,
            citizenStatus: "",
            accountType: "",
            branchName: "",
            initDepositAmount: null,
            initProofType: "",
            initDocumentNo: "",
            validateStatus: null,
            errorMsg: null,
            stateList: []
        }


    }

    // handle change text
    handleChangeText = (value, name) => {
        console.log(value, ",", name);
        this.setState({ [name]: value }, () => {
            if (name == 'dob') {
                this.handleChange_age(value)
            }
        })
    }

    handleChangeCountry = (countryName) => {
        console.log(countryName);
        let countrList = countries.countries;
        let countryObject = countrList.find(k => k.country == countryName);
        this.setState({
            ...this.state,
            stateList: countryObject.states,
            country: countryName
        })
    }

    //submit form
    submitForm = () => {
        console.log("form data");
        console.log(this.state);
    }

    // Cancel form
    navigateToLogin = () => {
        this.props.history.push({ pathname: '/login' })
    }

    //Check age and Citizen status
    handleChange_age = (dob) => {
        let currentAge = Math.abs((moment().year()) - (moment(dob, "DD/MM/YYYY").year()));
        let statusOfcitizen = null;
        if (currentAge < 18) {
            statusOfcitizen = "Minor";
        } else if (currentAge > 18 && currentAge <= 60) {
            statusOfcitizen = "Normal";
        } else if (currentAge > 60) {
            statusOfcitizen = "Senior";
        }
        this.setState({
            ...this.state,
            customerAge: currentAge,
            citizenStatus: statusOfcitizen
        })
    }

    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 9 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: { span: 24, offset: 0, },
                sm: { span: 21, offset: 0, },
            },
        };
        function disabledDate(current) {
            return current && current > moment().endOf('day');
        }
        return (
            <div>
                <Divider>New Registration</Divider>
                <Form
                    {...formItemLayout}
                    name="register"
                    scrollToFirstError
                >

                    <Form.Item
                        name="customerName"
                        label="Name"
                        // validateStatus={this.state.validateStatus}
                        // help={this.state.errorMsg}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
                                whitespace: true
                            }, {
                                pattern: /^([a-z]+\s)*[a-z]+$/,
                                message: 'Please input alphabets only!',
                            }
                        ]}
                    >
                        <Input onChange={e => this.handleChangeText(e.target.value, "username")} />
                    </Form.Item>

                    <Form.Item
                        name="username"
                        label="Username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input onChange={e => this.handleChangeText(e.target.value, "username")} />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password onChange={e => this.handleChangeText(e.target.value, "password")} />
                    </Form.Item>

                    <Form.Item
                        name="address"
                        label="Address"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Address!',
                                whitespace: true,
                            },
                        ]}
                    >
                        <TextArea onChange={e => this.handleChangeText(e.target.value, "address")} />
                    </Form.Item>


                    <Form.Item
                        name="country"
                        label="Country"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Country!'
                            },
                        ]}
                    >
                        <Select
                            showSearch
                            placeholder="Select a country"
                            optionFilterProp="children"
                            onChange={e => this.handleChangeCountry(e)}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {
                                countries.countries.map((cname, i) => {
                                    return (
                                        <Option value={cname.country} key={i}>{cname.country}</Option>
                                    )
                                })
                            }
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="state"
                        label="State"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your State!'
                            },
                        ]}
                    >
                        <Select
                            showSearch
                            placeholder="Select a state"
                            optionFilterProp="children"
                            onChange={e => this.handleChangeText(e, "state")}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {
                                this.state.stateList.map((sname, i) => {
                                    return (
                                        <Option value={sname} key={i}>{sname}</Option>
                                    )
                                })
                            }
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input onChange={e => this.handleChangeText(e.target.value, "email")} />
                    </Form.Item>

                    <Form.Item
                        name="contactNumber"
                        label="Contact Number"
                        // validateStatus={this.state.validateStatus}
                        // help={this.state.errorMsg}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your contact number!',
                                type: 'number'

                            },
                            {
                                pattern: /^[2-9]{2}[0-9]{8}$/,
                                message: 'Please input valid contact number!',
                            }
                        ]}
                    >

                        <InputNumber
                            min={0}
                            style={{ width: '100%' }}
                            onChange={e => this.handleChangeText(e, "contactNumber")}
                        />
                    </Form.Item>


                    <Form.Item
                        name="dob"
                        label="Date Of Birth"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your date of birth!'
                            },
                        ]}
                    >
                        <DatePicker
                            format="DD/MM/YYYY"
                            disabledDate={disabledDate}
                            style={{ width: '100%' }}
                            onChange={e =>
                                this.handleChangeText(moment(e).format("DD/MM/YYYY"), "dob")
                            }
                        />
                    </Form.Item>

                    <Form.Item
                        name="currentAge"
                        label="Your age is"
                    >
                        <Input value={this.state.customerAge} disabled />
                        <span></span>
                    </Form.Item>


                    <Form.Item
                        name="citizenStatus"
                        label="Citizen Status"
                    >
                        <Input value={this.state.citizenStatus} disabled />
                        <span></span>
                    </Form.Item>

                    <Form.Item
                        name="accountType"
                        label="Account Type"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your account type!'
                            },
                        ]}
                    >
                        <Select
                            showSearch
                            placeholder="Select a account type"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            onChange={e => this.handleChangeText(e, "accountType")}
                        >
                            <Option value="salary">Salary</Option>
                            <Option value="saving">Saving</Option>
                        </Select>

                    </Form.Item>
                    <Form.Item
                        name="branchName"
                        label="Branch Name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your branch name!',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input onChange={e => this.handleChangeText(e.target.value, "branchName")} />
                    </Form.Item>

                    <Form.Item
                        name="initDepositAmount"
                        label="Initial Deposit Amount"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Initial Deposit Amount!'
                            },
                        ]}
                    >
                        <InputNumber
                            min={1}
                            style={{ width: '100%' }}
                            onChange={e => this.handleChangeText(e, "initDepositAmount")}
                        />
                    </Form.Item>

                    <Form.Item
                        name="initProofType"
                        label="Identiication Proof Type"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Identiication Proof Type!',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input onChange={e => this.handleChangeText(e.target.value, "initProofType")} />
                    </Form.Item>

                    <Form.Item
                        name="initDocumentNo"
                        label="Identiication Document No"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Identiication Document No!',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input onChange={e => this.handleChangeText(e.target.value, "initDocumentNo")} />
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" onClick={this.submitForm}>
                            Register
                        </Button>
                        <Button type="default" style={{ margin: '0 8px' }} onClick={this.navigateToLogin}>
                            Cancel
                        </Button>
                    </Form.Item>


                </Form>
            </div>
        );
    }
}

Registration.propTypes = {

};

export default withRouter(Registration);