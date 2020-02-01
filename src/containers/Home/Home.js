import React from 'react';
import {List, Layout} from 'antd';
import DrawerK from '../../components/DrawerK/DrawerK';
import './Home.css';
const { Header, Content } = Layout;

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
const Home = () => {
    return (
        <>
        <Header className="Header">
            <DrawerK></DrawerK>
        </Header>
        <Content>
        <List className="List"
        size="large"
        bordered
        dataSource={data}
        renderItem={item => <List.Item className="Item">{item}</List.Item>}
      />
        </Content>
        </>
    )
};

export default Home;