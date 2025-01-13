import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Avatar, Drawer, Dropdown, Switch } from 'antd';
import { BulbOutlined, BulbFilled, HomeOutlined, CloseOutlined, MenuOutlined, LogoutOutlined, DashboardOutlined, SettingOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../state/slices/uiSlice';
import '../../styles/authenticated-header.scss';
import AiHeaderIcon from '../../assests/svgs/Benion-Tech-AI-Icon.svg';
import BenionAvatar from '../../assests/images/benion-avatar.jpg';
import { Link } from 'react-router-dom';
import MenuComponent from '../custom/MenuComponent';
import TextInput from '../custom/TextInput';
import paths from '../../services/paths';
import ActionButton from '../custom/ActionButton';
import { getThemeColor } from '../../services/helpers';

const { Fragment } = React
const AuthenticatedHeader = () => {
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.ui.theme)
  const [drawerVisible, setDrawerVisible] = useState(false)

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(e.target.value);
  }

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  const menuItems = [
    { key: 'home', label: <Link className='text-decoration-none' to={paths.homeUrl}>Home</Link>, icon: <HomeOutlined /> },
    { key: 'dashboard', label: <Link className='text-decoration-none' to={paths.dashboardUrl}>Dashboard</Link>, icon: <DashboardOutlined /> },
    { key: 'ai', label: <Link className='text-decoration-none' to={paths.aiUrl}>AI</Link>, icon: <HomeOutlined /> },
    { key: 'billing', label: 'Billing', icon: <HomeOutlined /> },
    { key: 'settings', label: 'Settings', icon: <SettingOutlined /> },
  ]

  const handleThemeToggle = (checked) => {
    const newTheme = checked ? 'dark' : 'light';
    dispatch(setTheme(newTheme)); // Dispatch theme change action
  }

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
  )

  const otherSection = (
    <Fragment>
      {/* Search bar */}
      <TextInput 
        type='search' 
        value={searchTerm} 
        isSearch={true} 
        onChange={handleChange} 
        placeholder="Search..." 
        className="search-input w-100" 
        allowClear={true} 
      />
      {drawerVisible ? (
        <Col xs={6} className="d-flex justify-content-end w-100 px-2 gap-1 mt-1">
          <Link to={paths.homeUrl}>
            <ActionButton 
              className="rounded-pill w-100" 
              variant={`${theme === 'dark' ? 'text' : 'outline-light'}`} 
              icon={<Avatar size={32} src={BenionAvatar} />} 
              onClick={() => console.log('Support clicked')}
            >
              Profile
            </ActionButton>
          </Link>
          <ActionButton 
            className="rounded-pill w-100" 
            variant={`${theme === 'dark' ? 'outline-dark' : 'primary'}`} 
            icon={<LogoutOutlined />} 
            onClick={() => console.log('Support clicked')}
          >
            Logout
          </ActionButton>
        </Col>
        ) : (
        <Dropdown menu={profileMenu} trigger={['click']}>
          <div className="avatar py-2">
            <Avatar size={32} src={BenionAvatar} />
          </div>
        </Dropdown>
      )}
      {/* Theme Toggle */}
      <Switch
        checked={theme === 'dark'}
        onChange={handleThemeToggle}
        checkedChildren={<BulbFilled />}
        unCheckedChildren={<BulbOutlined />}
        className="theme-toggle ms-3"
      />
    </Fragment>
  );

  return (
    <header className={`px-2 header authenticated-header ${theme}`}>
      <div className="container py-3">
        <Row className="align-items-center">
          {/* Logo Section */}
          <Col xs={6} md={3} className="d-flex align-items-center logo-container">
            <Link className="text-decoration-none" to={paths.homeUrl}>
              <img src={AiHeaderIcon} alt="Logo" className="me-2 logo-img" />
              {!drawerVisible && <span className={`fs-5 fw-bold logo-text`}>BenTelligence</span>}
            </Link>
          </Col>
          
          {/* Desktop Navigation Menu */}
          <Col md={6} className="d-none d-md-flex justify-content-center">
            <MenuComponent 
              mode="horizontal" 
              theme={theme} 
              className="border-0 bg-transparent fw-bold menu" 
              items={menuItems} 
            />
          </Col>

          {/* Profile, Search, and Theme Toggle */}
          <Col md={3} className="d-none d-md-flex justify-content-end align-items-center">
            {!drawerVisible && otherSection}
          </Col>

          {/* Mobile Menu Toggle */}
          <Col xs={6} className="d-flex d-md-none justify-content-end">
            {drawerVisible ? 
              <ActionButton 
                variant="normal" 
                icon={<CloseOutlined 
                style={{ color: getThemeColor(theme).color, fontSize: '24px' }} />} 
                onClick={closeDrawer} 
              />
              : 
              <ActionButton 
                variant="normal" 
                icon={<MenuOutlined style={{ color: getThemeColor(theme).color, fontSize: '24px' }} />} 
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
          className={`mobile-drawer ${theme} mt-5`}
          styles={{
              body: { padding: 0, backgroundColor: getThemeColor(theme).backgroundColor },
              header: { backgroundColor: getThemeColor(theme).backgroundColor, color: getThemeColor(theme).color },
          }}
          closeIcon={<CloseOutlined className='d-none' onClick={closeDrawer} style={{ color: getThemeColor(theme).color, cursor: 'pointer' }} />}
        >
          {/* Add Logo at the Top */}
          <Link to={paths.homeUrl} className="mobile-menu-logo px-4">
            <img src={AiHeaderIcon} alt="Logo" className="me-2 filter-white logo-img" />
            <span className="fs-5 fw-bold text-white">BenTelligence</span>
          </Link>

          {/* Mobile Menu Items */}
          <MenuComponent 
            mode="vertical" 
            theme="dark" 
            className="border-0 bg-transparent" 
            items={menuItems} 
          />

          {/* Profile, Search, and Theme Toggle */}
          {otherSection}
        </Drawer>
    </header>
  );
};

export default AuthenticatedHeader;
