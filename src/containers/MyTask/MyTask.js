import React from 'react';
import {List, Layout, Statistic, Button} from 'antd';
import './MyTask.css';
const { Header, Content } = Layout;

const data = [
    'Task 1',
    'Task 2',
    'Task 3',
    'Task 4',
    'Task 5',
    'Task 6',
    'Task 7',
    'Task 8',
    'Task 9',
    'Task 10',
    'Task 11'
  ];
const MyTask = () => {
    return (
        <>
            <Header className="taskheader" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <h1>My Task</h1>
            </Header>
            <Content className="Content">
            <List
        size="large"
        bordered
        dataSource={data}
        renderItem={(item,index) => <List.Item className="Item" id={index} >
            {item}
            <Statistic value={3} suffix="/ 6"></Statistic>
            <Button type="primary" ghost>Pick</Button></List.Item>}
      />
            </Content>
        </>
    )
};

export default MyTask;

