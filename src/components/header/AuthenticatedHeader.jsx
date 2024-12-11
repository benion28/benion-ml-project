import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Avatar, Dropdown, Input, Switch } from 'antd';
import { BulbOutlined, BulbFilled, HomeOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../state/slices/uiSlice';
import '../../styles/authenticated-header.scss';
import AiHeaderIcon from '../../assests/svgs/Benion-Tech-AI-Icon.svg';
import BenionAvatar from '../../assests/images/benion-avatar.jpg';
import { Link } from 'react-router-dom';
import MenuComponent from '../custom/MenuComponent';

const AuthenticatedHeader = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.ui.theme);

  const menuItems = [
    { key: 'home', label: 'Home', icon: <HomeOutlined /> },
    { key: 'calendar', label: 'Calendar', icon: <HomeOutlined /> },
    { key: 'people', label: 'People', icon: <HomeOutlined /> },
    { key: 'billing', label: 'Billing', icon: <HomeOutlined /> },
    { key: 'settings', label: 'Settings', icon: <HomeOutlined /> },
  ];

  const handleThemeToggle = (checked) => {
    const newTheme = checked ? 'dark' : 'light';
    dispatch(setTheme(newTheme)); // Dispatch theme change action
  };

  const profileMenu = (
    <MenuComponent
      mode="vertical"
      theme={theme}
      items={[
        { key: 'profile', label: <Link to="/profile">Profile</Link> },
        { key: 'settings', label: <Link to="/settings">Settings</Link> },
        { key: 'logout', label: <Link to="/" onClick={() => console.log('Logging out')}>Logout</Link> },
      ]}
    />
  );

  return (
    <header className={`header authenticated-header ${theme}`}>
      <div className="container py-3">
        <Row className="align-items-center">
          {/* Logo Section */}
          <Col xs={6} md={3} className="d-flex align-items-center logo-container">
            <Link className="text-decoration-none" to="/">
              <img src={AiHeaderIcon} alt="Logo" className="me-2 logo-img" />
              <span className={`fs-5 fw-bold logo-text`}>BenTelligence</span>
            </Link>
          </Col>

          {/* Navigation Menu */}
          <Col md={6} className="d-flex justify-content-center">
            <MenuComponent mode="horizontal" theme={theme} className="border-0 bg-transparent fw-bold menu" items={menuItems} />
          </Col>

          {/* Profile, Search, and Theme Toggle */}
          <Col md={3} className="d-flex justify-content-end align-items-center">
            {/* Search bar */}
            <Input.Search placeholder="Search..." className="search-input" />
            <Dropdown menu={profileMenu} trigger={['click']}>
              <Avatar size={32} src={BenionAvatar} className="avatar" />
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
