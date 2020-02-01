import React from 'react';
import {Layout} from 'antd';
import BottomPane from '../../components/BottomPane/BottomPane';
import Detail from '../../containers/Detail/Detail';
import './LayoutK.css';

import {BrowserRouter} from 'react-router-dom';
import Home from '../../containers/Home/Home';
const {Footer} = Layout;



const LayoutK = () => {
    return (
        <div>
    <Layout>
        <BrowserRouter>
            {/* <Home></Home> */}
            <Detail></Detail>
      </BrowserRouter>
      <Footer className="Footer">
          <BottomPane></BottomPane>
      </Footer>
    </Layout>
  </div>
    )
};

export default LayoutK;