import React, { useState } from 'react';
import { Form as AntdForm, Divider } from 'antd';
import { Form as BootstrapForm, Row, Col } from 'react-bootstrap';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import { danger_color, tertiary_color2 } from '../../services/helpers';
import TextInput from '../custom/TextInput';
import ActionButton from '../custom/ActionButton';
import Loader from '../custom/Loader';

const { Item, useForm } = AntdForm
const { Fragment } = React

const LoginForm = ({ switchToSignUp }) => {
  const [form] = useForm()
  const [isLoading, setIsLoading] = useState(false)

  const onFinish = (values) => {
    setIsLoading(true)
    console.log('Login Values:', values)
  };

  const onFinishFailed = (errors) => {
    setIsLoading(true)
    console.log('Login Errors:', errors)
  }

  return (
    <AntdForm
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"
      disabled={isLoading}
      name="loginForm"
    >
      <BootstrapForm>
        <div className="auth-form">
          <h3 className="text-white mb-3 text-center">Welcome Back</h3>
          <Row>
            <Col sm={12}>
              <Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Username is required' }]}
                hasFeedback
                className='item-label dark'
              >
                <TextInput 
                  placeholder="Username" 
                  className="mb-1 py-1 h-50" 
                />
              </Item>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Password is required' }]}
                hasFeedback
              >
                <TextInput 
                  type='password' 
                  placeholder="Password" 
                  className="mb-1 py-1 h-50" 
                />
              </Item>
            </Col>
          </Row>
          {isLoading ? 
             <Loader 
              size='small' 
              className='dark' 
              indicator 
              tip='Logging In' 
            />
              :
            <Fragment>
              <Item>
                <ActionButton 
                  variant='outline-light' 
                  type="submit" 
                  htmlType="submit" 
                  block 
                  className="mb-3 py-2"
                  form='loginForm'
                >
                  Log In
                </ActionButton>
              </Item>
              <Divider className="divider-light text-light">OR</Divider>
              <Row>
                <Col sm={12} className="mb-2">
                  <ActionButton
                    icon={<GoogleOutlined style={{ color: danger_color }} />}
                    block
                    variant='text'
                  >
                    Log In with Google
                  </ActionButton>
                </Col>
                <Col sm={12}>
                  <ActionButton
                    icon={<FacebookOutlined style={{ color: tertiary_color2 }} />}
                    block
                    variant='text'
                  >
                    Log In with Facebook
                  </ActionButton>
                </Col>
              </Row>
              <p className="switch-link text-center text-light mt-3">
                Don’t have an account?{' '}
                <span
                  onClick={switchToSignUp}
                  className="text-link"
                >
                  Sign Up
                </span>
              </p>
            </Fragment>
          }
        </div>
      </BootstrapForm>
    </AntdForm>
  );
};

export default LoginForm;
