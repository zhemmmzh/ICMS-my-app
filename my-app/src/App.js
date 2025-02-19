// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from '@douyinfe/semi-ui';
import SiderNav from './components/SiderNav';
import Home from './pages/Home';
import Activity from './pages/Activity';
import News from './pages/News';
import User from './pages/User';
import LayoutComponent from './pages/LayoutComponent';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

const App = () => {
    return (
        <Router>

            <Layout>
                    <Routes>
                        <Route path="/home" element={<LayoutComponent><Home /></LayoutComponent>} />
                        <Route path="/activity" element={<LayoutComponent><Activity /></LayoutComponent>} />
                        <Route path="/news" element={<LayoutComponent><News /></LayoutComponent>} />
                        <Route path="/user" element={<LayoutComponent><User /></LayoutComponent>} />
                        <Route path="/" element={<Login/>} />
                        <Route path="*" element={<NotFound/>} />
                        <Route path="login" element={<Login/>} />
                    </Routes>

            </Layout>
        </Router>
    );
};

export default App;
