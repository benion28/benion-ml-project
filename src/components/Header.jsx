import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap'; // Bootstrap grid
import { Menu, Drawer } from 'antd'; // Ant Design components
import { MenuOutlined, CustomerServiceOutlined, LoginOutlined, DashboardOutlined, LogoutOutlined } from '@ant-design/icons'; // Ant Design icons
import ActionButton from './inputs/ActionButton'; // Reusable Button Component
import AiHeaderIcon from '../assests/svgs/ai-header-icon.svg';
import '../styles/header.scss';

const Header = () => {
  const { Item } = Menu;
  const { Fragment } = React;
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container py-3">
        <Row className="align-items-center">
          {/* Logo Section */}
          <Col xs={6} md={4} className="d-flex align-items-center">
            <img
              src={AiHeaderIcon}
              alt="Logo"
              className="me-2 filter-white"
              style={{ width: '50px', height: 'auto' }}
            />
            <span className="fs-5 fw-bold text-white">BenTelligence</span>
          </Col>

          {/* Desktop Navigation Menu */}
          <Col md={4} className="d-none d-md-flex justify-content-center">
            <Menu
              mode="horizontal"
              theme="dark"
              className="border-0 bg-transparent"
              selectable={false}
            >
              <Item key="home" className="text-white menu-item">
                Home
              </Item>
              <Item key="features" className="text-white menu-item">
                Features
              </Item>
              <Item key="documentation" className="text-white menu-item">
                Documentation
              </Item>
            </Menu>
          </Col>

          {/* Action Buttons */}
          <Col md={4} className="d-none d-md-block text-end">
            <ActionButton
              className="btn-support me-3 rounded-pill"
              variant="outline-light"
              icon={<CustomerServiceOutlined />}
              onClick={() => console.log('Support clicked')}
            >
              Support
            </ActionButton>
            {authenticated ? (
              <ActionButton
                className="btn-purchase-now me-3 rounded-pill"
                variant="primary"
                icon={<DashboardOutlined />}
              >
                Dashboard
              </ActionButton>
            ) : (
              <ActionButton
                className="btn-purchase-now me-3 rounded-pill"
                variant="primary"
                icon={<LoginOutlined />}
                onClick={() => setAuthenticated(true)}
              >
                Login
              </ActionButton>
            )}
          </Col>

          {/* Mobile Menu Toggle */}
          <Col xs={6} className="d-flex d-md-none justify-content-end">
            <ActionButton
              variant="text"
              icon={<MenuOutlined style={{ color: 'white', fontSize: '24px' }} />}
              onClick={showDrawer}
            />
          </Col>
        </Row>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        visible={drawerVisible}
        bodyStyle={{ padding: 0, backgroundColor: '#1c1c3c' }} // Matches the header background
        headerStyle={{ backgroundColor: '#1c1c3c', color: 'white' }} // Ensures header consistency
        closeIcon={<span style={{ color: 'white' }}>X</span>} // White close button
      >
        <Menu mode="vertical" theme="dark" className="border-0 bg-transparent">
          <Item key="home" className="text-white menu-item">
            Home
          </Item>
          <Item key="demos" className="text-white menu-item">
            Demos
          </Item>
          <Item key="features" className="text-white menu-item">
            Features
          </Item>
          <Item key="documentation" className="text-white menu-item">
            Documentation
          </Item>
        </Menu>
        <div className="px-4 mt-3">
          <ActionButton
            className="btn-outline-light me-3 rounded-pill w-100"
            icon={<CustomerServiceOutlined />}
            onClick={() => console.log('Support clicked')}
          >
            Support
          </ActionButton>
          {authenticated ? (
            <Fragment>
              <ActionButton
                className="rounded-pill w-100 mt-2"
                variant="primary"
                type='primary'
                icon={<DashboardOutlined />}
              >
                Dashboard
              </ActionButton>
              <ActionButton
                className="rounded-pill w-100 mt-2"
                variant="primary"
                type='primary'
                onClick={() => setAuthenticated(false)}
                icon={<LogoutOutlined />}
              >
                Logout
              </ActionButton>
            </Fragment>
          ) : (
            <ActionButton
              className="rounded-pill w-100 mt-2"
              variant="primary"
              type='primary'
              icon={<LoginOutlined />}
              onClick={() => setAuthenticated(true)}
            >
              Login
            </ActionButton>
          )}
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
