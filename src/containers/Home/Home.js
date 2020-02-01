import React from 'react';
import {List, Layout, Tag, Button} from 'antd';
import DrawerK from '../../components/DrawerK/DrawerK';
import './Home.css';
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
    'Task 12',
    'Task 13',
    'Task 14',
    'Task 15',
    'Task 16'
  ];

const Home = (props) => {
  console.log(props);
  const detailsHandler = () => {
    props.history.push('/details')
  };
    return (
        <>
        <Header className="Header" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <DrawerK></DrawerK>
        </Header>
        <Content className="content">
        <List className="List"
        size="large"
        bordered
        dataSource={data}
        renderItem={(item,index) => <List.Item className="Item" id={index} >
          <div>{item} 
          <Tag color="magenta" className="tag">magenta</Tag></div>
          <Button type="primary" ghost onClick={detailsHandler}>DETAIL</Button></List.Item>}
      />
        </Content>
        </>
    )
};

export default Home;