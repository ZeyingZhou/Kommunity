import React from 'react';
import {Layout} from 'antd';
import BottomPane from '../../components/BottomPane/BottomPane';
import Detail from '../../containers/Detail/Detail';
import './LayoutK.css';
import {Route, Switch} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import Home from '../../containers/Home/Home';
import MyTask from '../../containers/MyTask/MyTask';
const {Footer} = Layout;



const LayoutK = () => {
    return (
        <BrowserRouter>  
    <Layout>
            <Route path="/" exact component={Home}></Route>
            <Route path="/details" component={Detail}></Route>
               <Route path="/mytask" component={MyTask}></Route>
    
      <Footer className="Footer">
          <BottomPane></BottomPane>
      </Footer>
    </Layout>
  </BrowserRouter>
    )
};

export default LayoutK;