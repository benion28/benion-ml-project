import React from 'react';
import { Divider } from 'antd';
import TextInput from '../custom/TextInput';
import ActionButton from '../custom/ActionButton';
import { Col, Row } from 'react-bootstrap';

const SignUpForm = ({ switchToLogin }) => {
  return (
    <div className="auth-form">
      <h3 className="text-white mb-3 d-flex justify-content-center">Create an account</h3>
      <Row>
        <Col sm={12} lg={6}>
          <TextInput 
            type='text' 
            placeholder="First Name" 
            className="mb-3 h-50"
          />
        </Col>
        <Col sm={12} lg={6}>
          <TextInput 
            type='text' 
            placeholder="Last Name" 
            className="mb-3 h-50" 
          />
        </Col>
      </Row>
      <Row>
        <Col sm={12} lg={6}>
          <TextInput 
            type='text' 
            placeholder="Username" 
            className="mb-3 h-50"
          />
        </Col>
        <Col sm={12} lg={6}>
          <TextInput 
            type='password' 
            placeholder="Password" 
            className="mb-3 h-50"
          />
        </Col>
      </Row>
      <Row>
        <Col sm={12} lg={12}>
          <TextInput 
            type='email' 
            placeholder="Email" 
            className="mb-3 h-50" 
          />
        </Col>
      </Row>
      <ActionButton 
        type="submit" 
        variant='primary' 
        block className="mb-3"
      >
        Sign Up
      </ActionButton>

      <Divider className="divider-light text-light">OR</Divider>

      <p className="switch-link text-center mt-3">
        Already have an account? <span onClick={switchToLogin} style={{ cursor: 'pointer' }} className="text-primary cursor-pointer">Log In</span>
      </p>
    </div>
  );
};

export default SignUpForm;
