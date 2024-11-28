import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap'; // Bootstrap grid
import { Button, Menu } from 'antd'; // Ant Design components
import '../styles/header.scss'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
        <Row className="align-items-center">
          {/* Logo Section */}
          <Col xs={4} className="logo">
            <img src="/path/to/logo.png" alt="Logo" className="logo-icon" />
            <span className="logo-text">Artelligence</span>
          </Col>

          {/* Navigation Links */}
          <Col xs={4} className="nav">
            <ul className="nav-list">
              <li>Home</li>
              <li>Demos</li>
              <li>Features</li>
              <li>Documentation</li>
            </ul>
          </Col>

          {/* Action Buttons */}
          <Col xs={4} className="actions text-end">
            <Button className="btn-outline">Support</Button>
            <Button type="primary" className="btn-purchase">Purchase Now</Button>
          </Col>
        </Row>
      </div>
      </header>
    );
  };

export default Header