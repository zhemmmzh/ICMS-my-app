// src/components/SiderNav.js
import React from 'react';
import { 
    IconHome,
    IconHistogram,
    IconMail, 
    IconUserCircle 
} from '@douyinfe/semi-icons';
import { Layout, Nav } from '@douyinfe/semi-ui';
import { useNavigate, useLocation } from 'react-router-dom';




const SiderNav = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const selectmenu = (e) => {
      console.log(e);
      navigate(e.itemKey);
    }
    const navItems = [
        { itemKey: '/Home', text: '首页', icon: <IconHome size="large" />, path: '/home' },
        { itemKey: '/Activity', text: '活动', icon: <IconHistogram size="large" /> , path: '/activity'},
        { itemKey: '/News', text: '信息', icon: <IconMail size="large" />, path: '/news' },
        { itemKey: '/User', text: '用户', icon: <IconUserCircle size="large" />, path: '/user' },
    ];

    return (
        <Nav
            style={{ maxWidth: 220, height: '100%' }}
            items={navItems}
            onClick={selectmenu}
            header={{
                logo: <img src="/assets/avatar-logo.png" alt="Logo" style={{ width: 50, height: 50 }} />,
                text: '创新杯管理系统',
            }}
            footer={{
                collapseButton: true,
            }}
        />
    );
};

export default SiderNav;
