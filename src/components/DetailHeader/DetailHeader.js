import React from 'react';
import { PageHeader, Button, Descriptions } from 'antd';

const DetailHeader = () => {
    return (
        <div
    style={{
      backgroundColor: '#F5F5F5',
      padding: 24,
    }}
  >
    <PageHeader
        avatar={{src: "../../assets/Pierce.jpg"}}
      ghost={false}
      title="Title"
      subTitle="This is a subtitle"
      extra={[
        <Button key="1" type="primary">
          Talk
        </Button>
      ]}
    >
      <Descriptions size="small" column={3}>
        <Descriptions.Item label="Name">Lili Qu</Descriptions.Item>
        <Descriptions.Item label="Time">
                10:30am
        </Descriptions.Item>
      </Descriptions>
    </PageHeader>
  </div>
    )
};

export default DetailHeader;