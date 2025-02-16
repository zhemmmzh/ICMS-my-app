// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404 - 页面未找到</h1>
            <p>您访问的页面不存在，请返回<Link to="/home">首页</Link>。</p>
        </div>
    );
};

export default NotFound;