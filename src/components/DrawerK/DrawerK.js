import React,{useState} from 'react';
import { Drawer, Button, Icon } from 'antd';



const DrawerK = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
      };
    
    const onClose = () => {
        setVisible(false);
      };
    return (
        <>
        <Button type="primary" shape="circle" onClick={showDrawer}>
            <Icon type="control" />
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="top"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      </>
    )
};

export default DrawerK;