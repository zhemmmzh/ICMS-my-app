// src/pages/Login.js
import React from 'react';
import { Form, Button, Tooltip, Typography } from '@douyinfe/semi-ui';
import { IconHelpCircle } from '@douyinfe/semi-icons';

const { Text } = Typography;

const Login = () => {
    const { Option } = Form.Select;

    
    const handleSubmit = (values) => {
        console.log('Form values:', values);
        
    };

  
    const validateRules = {
        UserName: [
            { required: true, message: '用户名不能为空' },
        ],
        Password: [
            { required: true, message: '密码不能为空' },
        ],
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f0f2f5' }}>
            <Form layout='vertical' onValueChange={handleSubmit} validateRules={validateRules} style={{ width: 300, padding: 24, background: '#fff', boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.1)' }}>
                <Form.Input field='UserName' label='用户名' placeholder='请输入用户名' style={{ marginBottom: 16 }} />
                <Form.Input
                    field='Password'
                    label={{ 
                        text: '密码',
                        extra: <Tooltip content='密码长度至少8个字符，使用大小写字母、数字和特殊字符的组合'><IconHelpCircle style={{ color: 'var(--semi-color-text-2)' }} /></Tooltip> 
                    }}
                    placeholder='请输入密码'
                    type='password'
                    style={{ marginBottom: 16 }}
                />
                <Form.Select field="Role" label='登入身份' style={{ marginBottom: 16 }}>
                    <Option value="superadmin">超级管理员</Option>
                    <Option value="admin">管理员</Option>
                    <Option value="user">普通用户</Option>
    
                </Form.Select>
                <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                    登录
                </Button>
                
            </Form>
        </div>
    );
};

export default Login;
