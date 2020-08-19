import React, { Component } from 'react'
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
import moment from 'moment';
import { QuestionCircleOutlined } from '@ant-design/icons';

class PersonalLoan extends Component {

    render() {
        let handleChangeText = this.props.handleChangeText;
        return (
            <div>
                <Form.Item
                    name="persoanlAnnualIncome"
                    label="Annual Income"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your annual income'
                        },
                    ]}
                >
                    <InputNumber
                        min={1}
                        style={{ width: '100%' }}
                        onChange={e => handleChangeText(e, "persoanlAnnualIncome")}
                    />
                </Form.Item>

                <Form.Item
                    name="companyName"
                    label="Company Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your company name'
                        },
                    ]}
                >
                    <Input onChange={e => handleChangeText(e.target.value, "companyName")} />
                </Form.Item>


                <Form.Item
                    name="designation"
                    label="Your Designation"
                    rules={[
                        {
                            required: true,
                            message: "Please input your designation"
                        },
                        {
                            pattern: /^([a-z]+\s)*[a-z]+$/,
                            message: 'Please input alphabets only!',
                        }
                    ]}
                >
                    <Input onChange={e => handleChangeText(e.target.value, "designation")} />
                </Form.Item>


                <Form.Item
                    name="totalExperience"
                    label="Your Total Experience"
                    rules={[
                        {
                            required: true,
                            message: "Please input your total Experience"
                        },
                    ]}
                >
                    <InputNumber
                        style={{ width: '100%' }}
                        step={0.1}
                        min={0}
                        max={100}
                        onChange={e => handleChangeText(e.target.value, "totalExperience")} />
                </Form.Item>

                <Form.Item
                    name="currentComapnyExp"
                    label="Current Company Experience"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your current company experience'
                        },
                    ]}
                >
                    <InputNumber
                        style={{ width: '100%' }}
                        step={0.1}
                        min={0}
                        max={100}
                        onChange={e => handleChangeText(e.target.value, "currentComapnyExp")}
                    />
                </Form.Item>
            </div>
        )
    }
}

export default PersonalLoan;
