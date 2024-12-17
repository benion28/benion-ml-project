import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Drawer } from 'antd';
import { MenuOutlined, CustomerServiceOutlined, LoginOutlined, CloseOutlined } from '@ant-design/icons';
import AiHeaderIcon from '../../assests/svgs/Benion-Tech-AI-Icon.svg';
import { Link } from 'react-router-dom';
import '../../styles/unauthenticated-header.scss';
import MenuComponent from '../custom/MenuComponent';
import ActionButton from '../custom/ActionButton';
import paths from '../../services/paths';
import { getThemeColor } from '../../services/helpers';
import PopupModal from '../custom/PopupModal';
import LoginForm from '../forms/LoginForm';
import SignUpForm from '../forms/SignUpForm';

const { Fragment } = React

const UnauthenticatedHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const toggleModal = () => setIsModalVisible(!isModalVisible);

  const switchToSignUp = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);

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

  const logoSection = (
    <Fragment>
      <img src={AiHeaderIcon} alt="Logo" className="me-2 filter-white logo-img" />
      <span className="fs-5 fw-bold text-white">BenTelligence</span>
    </Fragment>
  )

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container py-3">
        <Row className="align-items-center">
          {/* Logo Section */}
          <Col xs={6} md={4} className="d-flex align-items-center logo-container">
            <Link className="text-decoration-none" to={paths.homeUrl}>
              {!drawerVisible && 
                logoSection
              }
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
              className="me-3 rounded-pill" 
              variant="text" 
              icon={<CustomerServiceOutlined />} 
              onClick={() => console.log('Support clicked')}
            >
              Support
            </ActionButton>
            <ActionButton
              icon={<LoginOutlined />}
              variant="outline-light"
              onClick={toggleModal}
              className="rounded-pill"
            >
              Login
            </ActionButton>
          </Col>

          {/* Mobile Menu Toggle */}
          <Col xs={6} className="d-flex d-md-none justify-content-end">
            {drawerVisible ? 
              <ActionButton 
                variant="normal" 
                icon={<CloseOutlined 
                  style={{ color: getThemeColor('dark').color, fontSize: '24px' }} />} 
                  onClick={closeDrawer} 
                />
              : 
              <ActionButton 
                variant="normal" 
                icon={<MenuOutlined style={{ color: getThemeColor('dark').color, fontSize: '24px' }} />} 
                onClick={showDrawer} 
              />
            }
          </Col>
        </Row>
      </div>

      {/* Mobile Drawer */}
      <Drawer 
        title=""
        placement="right"
        onClose={closeDrawer} 
        open={drawerVisible}
        className='mt-3'
        styles={{
            body: { padding: 0, backgroundColor: getThemeColor('dark').backgroundColor },
            header: { backgroundColor: getThemeColor('dark').backgroundColor, color: getThemeColor('dark').color },
        }}
        closeIcon={<CloseOutlined className='d-none' onClick={closeDrawer} style={{ color: 'white', cursor: 'pointer' }} />}
      >
        {/* Add Logo at the Top */}
        <Link to={paths.homeUrl} className="mobile-menu-logo px-4">
          {logoSection}
        </Link>

        {/* Mobile Menu Items */}
        <MenuComponent 
          mode="vertical" 
          theme="dark" 
          className="border-0 bg-transparent mobile-menu" 
          items={menuItems} 
        />
        
        <div className="px-4 mt-3">
          <ActionButton 
            className="me-3 rounded-pill w-100 mb-1" 
            icon={<CustomerServiceOutlined />} 
            onClick={() => console.log('Support clicked')} 
            variant="primary"
          >
            Support
          </ActionButton>
          <ActionButton
              icon={<LoginOutlined />}
              variant="outline-dark"
              onClick={toggleModal}
              className="rounded-pill w-100 mb-1" 
            >
              Login
            </ActionButton>
        </div>
      </Drawer>

      <PopupModal
        visible={isModalVisible}
        onCancel={toggleModal}
        title={isLogin ? 'Log In' : 'Sign Up'}
      >
        {isLogin ? <LoginForm switchToSignUp={switchToSignUp} /> : <SignUpForm switchToLogin={switchToLogin} />}
      </PopupModal>

    </header>
  );
};

export default UnauthenticatedHeader;
