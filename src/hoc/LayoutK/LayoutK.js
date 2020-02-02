import React from 'react';
import {Layout} from 'antd';
import BottomPane from '../../components/BottomPane/BottomPane';
import Detail from '../../containers/Detail/Detail';
import './LayoutK.css';
import {Route, Switch} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import Home from '../../containers/Home/Home';
import MyTask from '../../containers/MyTask/MyTask';
import Account from '../../containers/Account/Account';
import Login from '../../containers/Login/Login';
import Register from '../../containers/Register/Register';
import error from '../../containers/404/404';
import Need from '../../containers/Need/Need';

const {Footer} = Layout;



const LayoutK = () => {
    return (
        <BrowserRouter>  
    <Layout style={{overflowX: "hidden"}}> 
    {/* <Register></Register> */}
    {/* <Login></Login> */}
 
    <Switch>
            <Need></Need>
            <Route path="/" exact component={Home}></Route>
            <Route path="/account" component={Account}></Route>
            <Route path="/details" component={Detail}></Route>
            <Route path="/mytask" component={MyTask}></Route>
            <Route component={error}></Route>
    </Switch>
    <Footer className="Footer">
          <BottomPane></BottomPane>
      </Footer>
    
    </Layout>
  </BrowserRouter>
    )
};

export default LayoutK;