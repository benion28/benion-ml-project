import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Menu, Avatar, Dropdown, Input, Switch } from 'antd';
import { HomeOutlined, BulbOutlined, BulbFilled } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../state/slices/uiSlice';
import '../../styles/authenticated-header.scss';
import AiHeaderIcon from '../../assests/svgs/Benion-Tech-AI-Icon.svg';
import { Link } from 'react-router-dom';

const AuthenticatedHeader = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.ui.theme);

  const menu = (
    <Menu>
      <Menu.Item key="profile">
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="settings">
        <Link to="/settings">Settings</Link>
      </Menu.Item>
      <Menu.Item key="logout">
        <Link to="/" onClick={() => console.log('Logging out')}>Logout</Link>
      </Menu.Item>
    </Menu>
  );

  const handleThemeToggle = (checked) => {
    const newTheme = checked ? 'dark' : 'light';
    dispatch(setTheme(newTheme)); // Dispatch theme change action
  };

  return (
    <header className={`header authenticated-header ${theme}`}>
      <div className="container py-3">
        <Row className="align-items-center">
          {/* Logo Section */}
          <Col xs={6} md={3} className="d-flex align-items-center logo-container">
            <Link className="text-decoration-none" to="/">
              <img src={AiHeaderIcon} alt="Logo" className="me-2 logo-img" />
              <span className="fs-5 fw-bold text-white">BenTelligence</span>
            </Link>
          </Col>

          {/* Navigation Menu */}
          <Col md={6} className="d-flex justify-content-center">
            <Menu mode="horizontal" theme={theme} className="border-0 bg-transparent menu">
              <Menu.Item key="home" icon={<HomeOutlined />} className="menu-item">Home</Menu.Item>
              <Menu.Item key="calendar" icon={<HomeOutlined />} className="menu-item">Calendar</Menu.Item>
              <Menu.Item key="people" icon={<HomeOutlined />} className="menu-item">People</Menu.Item>
              <Menu.Item key="billing" icon={<HomeOutlined />} className="menu-item">Billing</Menu.Item>
              <Menu.Item key="settings" icon={<HomeOutlined />} className="menu-item">Settings</Menu.Item>
            </Menu>
          </Col>

          {/* Profile, Search, and Theme Toggle */}
          <Col md={3} className="d-flex justify-content-end align-items-center">
            {/* Search bar */}
            <Input.Search placeholder="Search..." className="search-input" />
            <Dropdown overlay={menu} trigger={['click']}>
              <Avatar size={32} className="avatar" />
            </Dropdown>
            {/* Theme Toggle */}
            <Switch
              checked={theme === 'dark'}
              onChange={handleThemeToggle}
              checkedChildren={<BulbFilled />}
              unCheckedChildren={<BulbOutlined />}
              className="theme-toggle ms-3"
            />
          </Col>
        </Row>
      </div>
    </header>
  );
};

export default AuthenticatedHeader;
