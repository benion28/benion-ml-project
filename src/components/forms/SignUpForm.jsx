import React, { useState } from 'react';
import { Form as AntdForm, Divider } from 'antd';
import { Form as BootstrapForm, Row, Col } from 'react-bootstrap';
import TextInput from '../custom/TextInput';
import ActionButton from '../custom/ActionButton';
import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons';
import { danger_color, tertiary_color2 } from '../../services/helpers';
import Loader from '../custom/Loader';

const {Item, useForm } = AntdForm
const { Fragment } = React

const SignUpForm = ({ switchToLogin }) => {
  const [form] = useForm();
  const [isLoading, setIsLoading] = useState(false)

  const onFinish = (values) => {
    setIsLoading(true)
    console.log('Form Values:', values);
  };

  const onFinishFailed = (errors) => {
    setIsLoading(true)
    console.log('Form Errors:', errors);
  };

  return (
    <AntdForm 
      form={form} 
      disabled={isLoading}
      onFinish={onFinish} 
      onFinishFailed={onFinishFailed}
      layout="vertical"
      name='signupForm'
    >
      <BootstrapForm>
        <div className="auth-form">
          <h3 className="text-white mb-1 py-1 d-flex justify-content-center">Create an account</h3>
          <Row>
            <Col sm={12} lg={6}>
              <Item 
                label='First Name'
                name="firstName" 
                rules={[{ required: true, message: 'First Name is required' }]}
                hasFeedback
              >
                <TextInput 
                  type="text" 
                  placeholder="First Name" 
                  className="mb-1 py-1" 
                />
              </Item>
            </Col>
            <Col sm={12} lg={6}>
              <Item 
                label='Last Name'
                name="lastName" 
                rules={[{ required: true, message: 'Last Name is required' }]}
                hasFeedback
              >
                <TextInput 
                  type="text" 
                  placeholder="Last Name" 
                  className="mb-1 py-1 h-50" 
                />
              </Item>
            </Col>
          </Row>
          <Row>
            <Col sm={12} lg={6}>
              <Item 
                label='Username'
                name="username" 
                rules={[{ required: true, message: 'Username is required' }]}
                hasFeedback
              >
                <TextInput 
                  type="text" 
                  placeholder="Username" 
                  className="mb-1 py-1"
                />
              </Item>
            </Col>
            <Col sm={12} lg={6}>
            <Item 
                label='Sex'
                name="sex" 
                rules={[{ required: true, message: 'Sex is required' }]}
                hasFeedback
              >
                <TextInput 
                  type="text" 
                  placeholder="Sex" 
                  className="mb-1 py-1"
                />
              </Item>
            </Col>
          </Row>
          <Row>
            <Col sm={12} lg={6}>
              <Item 
                  label='Password'
                  name="password" 
                  rules={[{ required: true, message: 'Password is required' }]}
                  hasFeedback
                >
                  <TextInput 
                    type="password" 
                    placeholder="Password" 
                    className="mb-1 py-1 h-50" 
                  />
                </Item>
              </Col>
              <Col sm={12} lg={6}>
                <Item 
                  label='Confirm Password'
                  name="confirm_password" 
                  rules={[{ required: true, message: 'Password is required' }]}
                  hasFeedback
                >
                  <TextInput 
                    type="password" 
                    placeholder="Password" 
                    className="mb-1 py-1 h-50" 
                  />
                </Item>
              </Col>
            </Row>
            <Row>
              <Col sm={12} lg={12}>
                <Item 
                  label='Email'
                  name="email" 
                  rules={[
                    { required: true, message: 'Email is required' },
                    { type: 'email', message: 'Enter a valid email' }
                  ]}
                  hasFeedback
                >
                  <TextInput 
                    type="email" 
                    placeholder="Email" 
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
                type="submit" 
                htmlType="submit"
                variant="outline-light" 
                form='signupForm'
                block 
                className="mb-1 py-1"
              >
                Sign Up
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
                  Sign Up with Google
                </ActionButton>
              </Col>
              <Col sm={12}>
                <ActionButton
                  icon={<FacebookOutlined style={{ color: tertiary_color2 }} />}
                  block
                  variant='text'
                >
                  Sign Up with Facebook
                </ActionButton>
              </Col>
            </Row>
            <p className="switch-link text-center mt-3 text-light">
              Already have an account?{' '}
              <span 
                onClick={switchToLogin} 
                className="text-link"
              >
                Log In
              </span>
            </p>
            </Fragment>
          }
          
        </div>
      </BootstrapForm>
    </AntdForm>
  );
};

export default SignUpForm;
