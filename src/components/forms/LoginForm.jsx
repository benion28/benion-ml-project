import React from 'react'
import { Form as AntdForm, Divider } from 'antd'
import { Form as BootstrapForm, Row, Col } from 'react-bootstrap'
import { GoogleOutlined, FacebookOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'
import { danger_color, tertiary_color2 } from '../../services/helpers'
import TextInput from '../custom/TextInput'
import ActionButton from '../custom/ActionButton'
import Loader from '../custom/Loader'
import { useSelector } from 'react-redux'
import useAuth from '../../state/hooks/useAuth'

const { Item, useForm } = AntdForm
const { Fragment } = React

const LoginForm = ({ switchToSignUp }) => {
  const [form] = useForm()
  const { isLoading } = useSelector((state) => state.auth)
  const { login } = useAuth()

  const onFinish = (values) => {
    login(values)
  }

  const onFinishFailed = (errors) => {
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
              <h6 className='text-white'><span className='text-danger fw-bold px-1'>*</span>Username or Email</h6>
              <Item
                name="identifier"
                rules={[
                  { required: true, message: 'Username or Email is required' },
                ]}
                hasFeedback
                className="item-label dark"
              >
                <TextInput
                  placeholder="Enter your username or email"
                  className="mb-1 py-1 h-50"
                  prefix={<UserOutlined />}
                />
              </Item>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <h6 className='text-white'><span className='text-danger fw-bold px-1'>*</span>Password</h6>
              <Item
                name="password"
                rules={[{ required: true, message: 'Password is required' }]}
                hasFeedback
              >
                <TextInput 
                  type='password' 
                  placeholder="Password" 
                  className="mb-1 py-1 h-50" 
                  prefix={<LockOutlined />}
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
