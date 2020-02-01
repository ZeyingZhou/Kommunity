import React from 'react';
import {Icon} from 'antd';
import './BottomPane.css';


const BottomPane = () => {
    return (
        <nav className="navbar">
        <div onClick type="primary" className="button">
            <Icon type="menu" />
            TASK
          </div>
            <div onClick type="primary" className="button">
            <Icon type="plus" />
            NEED
          </div>
            <div onClick type="primary" className="button">
            <Icon type="user" />
            MY
            </div>
        </nav>

    )
};

export default BottomPane;