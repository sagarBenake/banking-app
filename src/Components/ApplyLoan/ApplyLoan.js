import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EducationLoan from './EducationLoan/EducationLoan';
import PersonalLoan from './PersonalLoan/PersonalLoan';
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


const { Option } = Select;

class ApplyLoan extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loanType: "",
            loanAmount: null,
            loanApplyDate: null,
            loanIntreset: null,
            //Education Loan States
            loanDuration: null,
            courseFee: "",
            courseName: "",
            fatherName: "",
            fatherOccupation: "",
            annualIncome: null,
            // Personal Loan States
            persoanlAnnualIncome: null,
            companyName: "",
            designation: "",
            totalExperience: null,
            currentComapnyExp: null,
            
        }
    }


    // handle change text
    handleChangeText = (value, name) => {
        console.log(value, ",", name);
        this.setState({ [name]: value }, () => {
            if (name == 'loanType') {
                this.setRateOfInterset(value);
            }
        })
    }

    //Set Loan interest
    setRateOfInterset = (loanTyp) => {
        let rateofIntreset = null;
        if (loanTyp == 'education')
            rateofIntreset = '10.25';
        else if (loanTyp == 'personal')
            rateofIntreset = '11.25';
        this.setState({
            ...this.state,
            loanIntreset: rateofIntreset
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
                sm: { span: 24, offset: 0, },
            },
        };
        function disabledDate(current) {
            return current && current > moment().endOf('day');
        }

        //render type of load module inputs
        let typeOfloanInputs = null;
        if (this.state.loanType == 'education')
            typeOfloanInputs = <EducationLoan handleChangeText={this.handleChangeText} />;
        else if (this.state.loanType == 'personal')
            typeOfloanInputs = <PersonalLoan handleChangeText={this.handleChangeText} />;

        return (
            <div>
                <Divider style={{color:'#2780FF'}}>Apply for Loan</Divider>
                <Form
                    {...formItemLayout}
                    name="applyloan"
                    scrollToFirstError
                >

                    <Form.Item
                        name="loanType"
                        label="Loan Type"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Loan type!'
                            },
                        ]}
                    >
                        <Select
                            showSearch
                            placeholder="Select a Loan type"
                            optionFilterProp="children"
                            onChange={e => this.handleChangeText(e, "loanType")}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="education">Education Loan</Option>
                            <Option value="personal">Personal/Home Loan</Option>
                        </Select>

                    </Form.Item>

                    <Form.Item
                        name="loanAmount"
                        label="Loan Amount"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your loan amount!',
                                whitespace: true,
                            },
                        ]}
                    >
                        <InputNumber
                            min={1}
                            style={{ width: '100%' }}
                            onChange={e => this.handleChangeText(e, "loanAmount")} />
                    </Form.Item>

                    <Form.Item
                        name="loanApplyDate"
                        label="Loan Apply Date"
                        rules={[
                            {
                                required: true,
                                message: 'Please select loan apply date'
                            },
                        ]}
                    >
                        <DatePicker
                            format="DD/MM/YYYY"
                            style={{ width: '100%' }}
                            disabledDate={disabledDate}
                            onChange={e =>
                                this.handleChangeText(moment(e).format("DD/MM/YYYY"), "loanApplyDate")
                            }
                        />
                    </Form.Item>

                    <Form.Item
                        name="rateIntrest"
                        label="Rate of Interest"
                    >
                        <InputNumber
                            value={this.state.loanIntreset}
                            style={{ width: '100%' }} 
                            disabled 
                        />
                        <span></span>
                    </Form.Item>

                    <Form.Item
                        name="loanDuration"
                        label="Duration of the loan"
                        rules={[
                            {
                                required: true,
                                message: 'Please select loan apply date'
                            },
                        ]}
                    >
                        <InputNumber
                            min={5}
                            max={20}
                            step={5}
                            value={this.state.loanIntreset}
                            style={{ width: '100%' }}
                            onChange={e => this.handleChangeText(e, "loanDuration")}
                        />
                    </Form.Item>

                    {/* Load Type of loan inputs */}
                    {typeOfloanInputs}

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" onClick={this.submitForm}>
                            Apply Loan
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

ApplyLoan.propTypes = {

};

export default ApplyLoan;

