import React from 'react';
import NavBarK from '../../components/NavbarK/NavBarK';
import {Layout} from 'antd';
import './Detail.css';
import DetailInfo from '../../components/DetailInfo/DetailInfo';
const { Header, Content } = Layout;
const Detail = () => {
    return (
        <>
        <Header className="Header" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <NavBarK></NavBarK>
        </Header>
        <Content className="detailContent">
            <DetailInfo></DetailInfo>
        </Content>
        </>
    )
};

export default Detail;