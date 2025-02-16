// src/router/Layout.js
import React from 'react';
import { Layout } from '@douyinfe/semi-ui';
import SiderNav from '../components/SiderNav';
import HeaderNav from '../components/HeaderNav';
import FooterComponent from '../components/FooterComponent';

function LayoutComponent({ children }) {
    const { Header, Footer, Sider, Content } = Layout;

    return (
        <Layout style={{ border: '1px solid var(--semi-color-border)' }}>
            <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
                <SiderNav />
            </Sider>
            <Layout>
                <Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
                    <HeaderNav />
                </Header>
                <Content
                    style={{
                        padding: '24px',
                        backgroundColor: 'var(--semi-color-bg-0)',
                    }}
                >
                    {children}
                </Content>
                <Footer>
                    <FooterComponent />
                </Footer>
            </Layout>
        </Layout>
    );
}

export default LayoutComponent;
