// src/components/HeaderNav.js
import React from 'react';
import { Nav, 
    Button, 
    } from '@douyinfe/semi-ui';
import {IconBell,
    IconHelpCircle}from '@douyinfe/semi-icons';

const HeaderNav = () => {
    return (
        <Nav
            mode="horizontal"
            footer={(
                <>
                    <Button
                        theme="borderless"
                        icon={<IconBell size="large" />}
                        style={{
                            color: 'var(--semi-color-text-2)',
                            marginRight: '12px',
                        }}
                    />
                    <Button
                        theme="borderless"
                        icon={<IconHelpCircle size="large" />}
                        style={{
                            color: 'var(--semi-color-text-2)',
                            marginRight: '12px',
                        }}
                    />
                </>
            )}
        />
    );
};

export default HeaderNav;
