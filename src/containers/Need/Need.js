import React from 'react';
import {Layout} from 'antd'
import './Need.css';
import CreateTask from '../../components/CreateTask/CreateTask';
import PostHelp from '../../components/PostHelp/PostHelp';

const {Content, Header} = Layout;

const Need = () => {
    return (
        <>
        <Header className="needheader" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <h1>My Task</h1>
        </Header>
        <Content className="needcontent">
            <CreateTask></CreateTask>
            <PostHelp></PostHelp>
        </Content>
        </>
    )
};

export default Need;