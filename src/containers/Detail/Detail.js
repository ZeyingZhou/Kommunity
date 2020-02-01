import React from 'react';
import NavBarK from '../../components/NavbarK/NavBarK';
import {Layout} from 'antd';
import './Detail.css';
import DetailInfo from '../../components/DetailInfo/DetailInfo';
const { Header, Content } = Layout;
const Detail = () => {
    return (
        <>
        <Header className="Header">
            <NavBarK></NavBarK>
        </Header>
        <Content>
            <DetailInfo></DetailInfo>
        </Content>
        </>
    )
};

export default Detail;