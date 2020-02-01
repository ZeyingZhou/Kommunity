import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import {Layout} from 'antd';
import './Login.css';

const {Content } = Layout;

const Login = () => {
    return (
        <Layout className="login">
        <Content className="loginform">
            <LoginForm></LoginForm>
        </Content>
        </Layout>
    )
};

export default Login;
