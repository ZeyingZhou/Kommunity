import React from 'react';
import {Layout} from 'antd';
import AccountHeader from '../../components/AccountHeader/AccountHeader';
import AccountInfo from '../../components/AccountInfo/AccountInfo';
import AccountTabs from '../../components/AccountTabs/AccountTabs';

import './Account.css';
const { Header, Content } = Layout;

const Account = () => {
    return (
        <>
        <Header className="accounthead">
            <AccountHeader></AccountHeader>
        </Header>
        <Content>
            <AccountInfo></AccountInfo>
            <AccountTabs></AccountTabs>
        </Content>
        </>
    )
};
// import React from 'react';
// import { Descriptions, Badge } from 'antd';
// import './Account.css';

// const Account = () => {
//     return (
//         <Descriptions title="Account Details" layout="vertical" bordered>
//         <Descriptions.Item label="FirstName">Cloud Database</Descriptions.Item>
//         <Descriptions.Item label="LastName">Prepaid</Descriptions.Item>
//         <Descriptions.Item label="Gender">YES</Descriptions.Item>
//         <Descriptions.Item label="Age">2018-04-24 18:00:00</Descriptions.Item>
//         <Descriptions.Item label="Birthday" span={2}>
//           2019-04-24 18:00:00
//         </Descriptions.Item>
//         <Descriptions.Item label="Status" span={3}>
//           <Badge status="processing" text="Running" />
//         </Descriptions.Item>
//         <Descriptions.Item label="Email">$80.00</Descriptions.Item>
//         <Descriptions.Item label="Phone Number">$20.00</Descriptions.Item>
//         <Descriptions.Item label="Address">$60.00</Descriptions.Item>
//       </Descriptions>
//     )
// };

export default Account;