import React from 'react';
import { PageHeader, Button, Descriptions } from 'antd';
import './DetailHeader.css'
const DetailHeader = () => {
    return (
        <div className="DetailHeader">
    <PageHeader
        avatar={{src: "https://image.flaticon.com/icons/svg/147/147144.svg"}}
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