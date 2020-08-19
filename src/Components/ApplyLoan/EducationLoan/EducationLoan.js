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

class EducationLoan extends Component {

    render() {
        let handleChangeText = this.props.handleChangeText;

        return (
            <div>
                <Form.Item
                    name="courseFee"
                    label="Course Fee"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your course fee'
                        },
                    ]}
                >
                    <InputNumber
                        style={{ width: '100%' }}
                        min={1}
                        onChange={e => handleChangeText(e, "courseFee")} />
                </Form.Item>

                <Form.Item
                    name="courseName"
                    label="Course Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your course name'
                        },
                        {
                            pattern: /^([a-z]+\s)*[a-z]+$/,
                            message: 'Please input alphabets only!',
                        }
                    ]}
                >
                    <Input onChange={e => handleChangeText(e.target.value, "courseName")} />
                </Form.Item>


                <Form.Item
                    name="fatherName"
                    label="Father's Name"
                    rules={[
                        {
                            required: true,
                            message: "Please input your father's name"
                        },
                        {
                            pattern: /^([a-z]+\s)*[a-z]+$/,
                            message: 'Please input alphabets only!',
                        }
                    ]}
                >
                    <Input onChange={e => handleChangeText(e.target.value, "fatherName")} />
                </Form.Item>


                <Form.Item
                    name="fatherOccupation"
                    label="Father Occupation"
                    rules={[
                        {
                            required: true,
                            message: "Please input your father's occupation"
                        },
                        {
                            pattern: /^([a-z]+\s)*[a-z]+$/,
                            message: 'Please input alphabets only!',
                        }
                    ]}
                >
                    <Input onChange={e => handleChangeText(e.target.value, "fatherOccupation")} />
                </Form.Item>

                <Form.Item
                    name="annualIncome"
                    label="Annual Income"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your annual income'
                        },
                    ]}
                >
                    <InputNumber
                        style={{ width: '100%' }}
                        min={1}
                        onChange={e => handleChangeText(e, "annualIncome")} />
                </Form.Item>
            </div>
        )
    }
}

export default EducationLoan;
