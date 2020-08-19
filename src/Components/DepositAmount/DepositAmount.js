import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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

class DepositAmount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
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
                sm: { span: 24, offset: 0, },
            },
        };
        return (
            <div>
                <Divider style={{color:'#2780FF'}}>Deposit Amount into Account</Divider>
                <Form
                    {...formItemLayout}
                    name="depositAmount"
                    scrollToFirstError
                >
                    <Form.Item
                        name="accountType"
                        label="Account Type"
                    >
                        <Input disabled/>
                    </Form.Item>

                    <Form.Item
                        name="currentBalance"
                        label="Current Balace"
                    >
                        <Input disabled/>
                    </Form.Item>

                    <Form.Item
                        name="depositAmount"
                        label="Deposit Amount"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your deposit amount!',
                                whitespace: true,
                            },
                        ]}
                    >
                        <InputNumber
                            min={1}
                            style={{ width: '100%' }}
                        />
                        <span></span>
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" onClick={this.submitForm}>
                            Deposit Amount
                        </Button>
                        <Link to="/dashboard">
                            <Button type="default" style={{ margin: '0 8px' }}>
                                Cancel
                            </Button>
                        </Link>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

DepositAmount.propTypes = {

};

export default DepositAmount;