import React from 'react';
import { Form as AntdForm, Divider } from 'antd';
import { Form as BootstrapForm, Row, Col } from 'react-bootstrap';
import TextInput from '../custom/TextInput';
import ActionButton from '../custom/ActionButton';

const {Item, useForm } = AntdForm

const SignUpForm = ({ switchToLogin }) => {
  const [form] = useForm();

  const onFinish = (values) => {
    console.log('Form Values:', values);
  };

  const onFinishFailed = (errors) => {
    console.log('Form Errors:', errors);
  };

  return (
    <AntdForm 
      form={form} 
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
                  style={{ maxHeight: '50%' }}
                />
              </Item>
            </Col>
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
          <p className="switch-link text-center mt-3 text-light">
            Already have an account?{' '}
            <span 
              onClick={switchToLogin} 
              style={{ cursor: 'pointer' }} 
              className="text-primary cursor-pointer"
            >
              Log In
            </span>
          </p>
        </div>
      </BootstrapForm>
    </AntdForm>
  );
};

export default SignUpForm;
