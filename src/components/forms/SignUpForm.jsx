import React from 'react';
import { Form as AntdForm, Divider } from 'antd';
import { Form as BootstrapForm, Row, Col } from 'react-bootstrap';
import TextInput from '../custom/TextInput';
import ActionButton from '../custom/ActionButton';
import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons';
import { danger_color, tertiary_color2, userGenders } from '../../services/helpers';
import Loader from '../custom/Loader';
import { useSelector } from 'react-redux';
import SelectInput from '../custom/SelectInput';
import CheckboxInput from '../custom/CheckboxInput';
import useAuth from '../../state/hooks/useAuth';

const {Item, useForm } = AntdForm
const { Fragment } = React

const SignUpForm = ({ switchToLogin }) => {
  const [form] = useForm()
  const { isLoading } = useSelector((state) => state.auth)
  const { register } = useAuth()

  const onFinish = (values) => {
    register(values)
  }

  const onFinishFailed = (errors) => {
    console.log('Form Errors:', errors.errorFields)
  }

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
            <h6 className='text-white'><span className='text-danger fw-bold px-1'>*</span>First Name</h6>
              <Item 
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
            <h6 className='text-white'><span className='text-danger fw-bold px-1'>*</span>Last Name</h6>
              <Item 
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
            <h6 className='text-white'><span className='text-danger fw-bold px-1'>*</span>Username</h6>
              <Item 
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
            <h6 className='text-white'><span className='text-danger fw-bold px-1'>*</span>Gender</h6>
            <Item 
                name="gender" 
                rules={[{ required: true, message: 'Gender is required' }]}
                hasFeedback
              >
                <SelectInput
                  placeholder="Choose an option"
                  className="mb-1 h-50"
                  options={userGenders}
                />
              </Item>
            </Col>
          </Row>
          <Row>
            <Col sm={12} lg={6}>
            <h6 className='text-white'><span className='text-danger fw-bold px-1'>*</span>Password</h6>
              <Item 
                  name="password" 
                  rules={[
                    { required: true, message: 'Password is required' },
                    { min: 8, message: 'Password should not be less than 8 characters' },
                    { max: 12, message: 'Password should not be more than 12 characters' }
                  ]}
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
              <h6 className='text-white'><span className='text-danger fw-bold px-1'>*</span>Confirm Password</h6>
                <Item 
                  name="password2" 
                  rules={[
                    { required: true, message: 'Confirm Password is required' },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('Passwords do not match'));
                      },
                    }),
                  ]}
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
              <h6 className='text-white'><span className='text-danger fw-bold px-1'>*</span>Email</h6>
                <Item 
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
            <Row>
              <Col sm={12} lg={12}>
              <h6 className='text-white'><span className='text-danger fw-bold px-1'>*</span>Terms and Condition</h6>
                <Item 
                  name="isAccept" 
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject(new Error('You need to accept the terms and conditions')),
                    },
                  ]}
                  hasFeedback
                >
                  <CheckboxInput
                    label="Accept Terms and Conditions"
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
