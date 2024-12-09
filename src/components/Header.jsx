import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Drawer } from 'antd';
import { 
  MenuOutlined, 
  CustomerServiceOutlined, 
  LoginOutlined, 
  DashboardOutlined, 
  LogoutOutlined 
} from '@ant-design/icons';
import AiHeaderIcon from '../assests/svgs/Benion-Tech-AI-Icon.svg';
import '../styles/header.scss';
import { Link } from 'react-router-dom';
import { dashboardUrl } from '../services/paths';
import MenuComponent from './custom/MenuComponent';
import ActionButton from './custom/ActionButton';

const Header = () => {
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

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  const menuItems = [
    { key: 'home', label: 'Home', className: 'text-white menu-item' },
    { key: 'features', label: 'Features', className: 'text-white menu-item' },
    { key: 'documentation', label: 'Documentation', className: 'text-white menu-item' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container py-3">
        <Row className="align-items-center">
          {/* Logo Section */}
          <Col xs={6} md={4} className="d-flex align-items-center logo-container">
            <Link className="text-decoration-none" to="/">
              <img
                src={AiHeaderIcon}
                alt="Logo"
                className="me-2 filter-white"
                style={{ width: '50px', height: 'auto' }}
              />
              <span className="fs-5 fw-bold text-white">BenTelligence</span>
            </Link>
          </Col>

          {/* Desktop Navigation Menu */}
          <Col md={4} className="d-none d-md-flex justify-content-center">
            <MenuComponent
              mode="horizontal"
              theme="dark"
              className="border-0 bg-transparent"
              items={menuItems}
            />
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
              <Link to={dashboardUrl}>
                <ActionButton
                  className="btn-purchase-now me-3 rounded-pill"
                  icon={<DashboardOutlined />}
                >
                  Dashboard
                </ActionButton>
              </Link>
            ) : (
              <ActionButton
                className="btn-purchase-now me-3 rounded-pill"
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
        open={drawerVisible}
        styles={{
          body: { padding: 0, backgroundColor: '#1c1c3c' },
          header: { backgroundColor: '#1c1c3c', color: 'white' },
        }}
        closeIcon={<span style={{ color: 'white' }}>X</span>}
      >
        <MenuComponent
          mode="vertical"
          theme="dark"
          className="border-0 bg-transparent"
          items={[
            ...menuItems,
            { key: 'demos', label: 'Demos', className: 'text-white menu-item' },
          ]}
        />
        <div className="px-4 mt-3">
          <ActionButton
            className="btn-support me-3 rounded-pill w-100"
            icon={<CustomerServiceOutlined />}
            onClick={() => console.log('Support clicked')}
            variant="outline-light"
          >
            Support
          </ActionButton>
          {authenticated ? (
            <Fragment>
              <Link to={dashboardUrl}>
                <ActionButton
                  className="btn-purchase-now me-3 rounded-pill w-100 mt-2"
                  icon={<DashboardOutlined />}
                  variant="outline-light"
                >
                  Dashboard
                </ActionButton>
              </Link>
              <ActionButton
                className="btn-purchase-now me-3 rounded-pill w-100 mt-2"
                onClick={() => setAuthenticated(false)}
                icon={<LogoutOutlined />}
                variant="outline-light"
              >
                Logout
              </ActionButton>
            </Fragment>
          ) : (
            <ActionButton
              className="btn-purchase-now me-3 rounded-pill w-100 mt-2"
              icon={<LoginOutlined />}
              onClick={() => setAuthenticated(true)}
              variant="outline-light"
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
