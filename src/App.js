import React, { useState } from 'react';
import AppHeaderGreen from './components/common/headerGreen/headerGreen';
import AppHeader from './components/common/header/header';
import AppFooter from './components/common/footer/footer';
import AppHome from './views/home';
import AppBlog from './views/blog';
import AppPortofolio from './views/portofolio';
import AppContact from './views/contact';
import AppAbout from './views/about';
import AppService from './views/service';
import { Layout } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import 'antd/dist/antd.css';


const { Header, Content, Footer } = Layout;
const { Width } = Header;

function App() {


  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeaderGreen/>
        <AppHeader/>
      </Header>
      <Content>
        <Router>
          <Route exact path="/blog">
            <AppBlog/>
          </Route>
          <Route exact path="/portofolio">
            <AppPortofolio/>
          </Route>
          <Route exact path="/about">
            <AppAbout/>
          </Route>
          <Route exact path="/contact">
            <AppContact/>
          </Route>
          <Route exact path="/service">
            <AppService/>
          </Route>
          <Route exact path="/">
            <AppHome/>
          </Route>
        </Router>
      </Content>
      <Footer>
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default App;
