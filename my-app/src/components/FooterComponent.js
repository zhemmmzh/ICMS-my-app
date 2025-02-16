// src/components/FooterComponent.js
import React from 'react';
import { IconBytedanceLogo } from '@douyinfe/semi-icons';

const FooterComponent = () => {
    return (
        <span
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '20px',
                color: 'var(--semi-color-text-2)',
                backgroundColor: 'rgba(var(--semi-grey-0), 1)',
            }}
        >
            <span
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <IconBytedanceLogo size="large" style={{ marginRight: '8px' }} />
                <span>NJUPT Innovation Cup Management System</span>
            </span>
            <span>
                <img src="/assets/sastlogo.png" alt="Logo" style={{ width: 99, height: 40 }} />
            </span>
        </span>
    );
};

export default FooterComponent;
