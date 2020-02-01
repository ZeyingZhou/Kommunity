import React from 'react';
import { Progress } from 'antd';
import './ProgressK.css';
const ProgressK = () => {
    return (
        <div className="progress"> 
              <Progress percent={100} />
        </div>
    )
};

export default ProgressK;