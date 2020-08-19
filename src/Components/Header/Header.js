import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import {
    HomeOutlined,
    DollarOutlined,
    LogoutOutlined,
    CreditCardOutlined
} from '@ant-design/icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class Header extends Component {

    render() {
        return (
            <div >
                <Menu mode="horizontal" style={{ backgroundColor: '#F9FCF9' }} >
                    <Menu.Item key="dashboard" icon={<HomeOutlined />}>
                        <Link to="/dashboard">Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item key="applyLoan" icon={<DollarOutlined />}>
                        <Link to="/applyLoan">Apply Loan</Link>
                    </Menu.Item>
                    <Menu.Item key="updateDetails" icon={<CreditCardOutlined />}>
                        <Link to="/depositAmount">Deposit Amount</Link>
                    </Menu.Item>
                    <Menu.Item key="Logout" icon={<LogoutOutlined />} style={{ float: 'right' }}>
                        Logout
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

Header.propTypes = {

};

export default Header;