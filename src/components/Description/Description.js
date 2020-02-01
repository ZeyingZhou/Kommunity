import React from 'react';
import { Card } from 'antd';
import './Description.css';
const Description = () => {
    return (
        <div className="description">
        <Card title="Description" bordered={false} style={{ width: "100vw" }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    )
};

export default Description;