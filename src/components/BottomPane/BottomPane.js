import React from 'react';
import {Icon} from 'antd';
import './BottomPane.css';
import {Link} from 'react-router-dom';

const BottomPane = () => {
    return (
        <nav className="navbar">
          <Link to="/">
          <div type="primary" className="button">
            <Icon type="menu" />
            TASK
          </div>
          </Link>
          <Link to="/need">
          <div type="primary" className="button">
            <Icon type="plus" />
            NEED
          </div>
          </Link>
          <Link to="/account">
          <div type="primary" className="button">
            <Icon type="user" />
            MY
            </div>
          </Link>
        </nav>

    )
};

export default BottomPane;