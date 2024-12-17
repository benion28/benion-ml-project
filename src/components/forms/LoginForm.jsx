import React from 'react';
import { Input, Button, Divider } from 'antd';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import { danger_color, tertiary_color2 } from '../../services/helpers';

const LoginForm = ({ switchToSignUp }) => {
  return (
    <div className="auth-form">
      <h3 className="text-white mb-3">Welcome back</h3>
      <Input placeholder="Username" className="mb-3" />
      <Input.Password placeholder="Password" className="mb-3" />
      <Button type="primary" block className="mb-3">Log In</Button>

      <Divider className="divider-light">OR</Divider>

      <Button icon={<GoogleOutlined style={{ color: danger_color}} />} block className="mb-2">Log In with Google</Button>
      <Button icon={<FacebookOutlined style={{ color: tertiary_color2}}  />} block>Log In with Facebook</Button>

      <p className="switch-link text-center mt-3">
        Don’t have an account? <span onClick={switchToSignUp} style={{ cursor: 'pointer' }} className="text-primary cursor-pointer">Sign Up</span>
      </p>
    </div>
  );
};

export default LoginForm;
