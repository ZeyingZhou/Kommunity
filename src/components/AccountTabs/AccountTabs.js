import React from 'react';
import { Tabs } from 'antd';
import './AccountTabs.css';
import AvatarK from '../AvatarK/AvatarK';

const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
  }
const AccountTabs = () => {
    return (
        <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane className="panel" tab="People that I help" key="1">
          <AvatarK></AvatarK>
        </TabPane>
        <TabPane className="panel" tab="People that help me" key="2">
        <AvatarK></AvatarK>
        </TabPane>
        <TabPane className="panel" tab="Unfinish Tasks" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    )
};
export default AccountTabs;