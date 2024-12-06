import React from 'react';
import { Row, Col } from 'react-bootstrap';
import TypingEffect from './TypingEffect';
import '../styles/hero.scss';
import Hero1 from '../assests/images/hero-1.jpg';
import ActionButton from './inputs/ActionButton';
import { RightCircleOutlined } from '@ant-design/icons';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <Row className="align-items-center">
          {/* Left Section: Text */}
          <Col md={6} className="text-center text-md-start">
            <h1 className="hero-title">
              <span>The Ultimate</span>
              <span className="highlight">
                <div className="d-flex flex-row gap-3">
                  <span>AI & </span>
                  <TypingEffect texts={['Robotic', 'Software']} />
                </div>
              </span>
              <span>Theme</span>
            </h1>
            <p className="hero-subtitle">
              Explore Our Unique Layouts for Your Business Niche
            </p>
            <p className="hero-description">
              Artelligence is the top-selling AI & Robotics theme. Discover multiple unique home page layouts—all under one theme!
            </p>
            <div className="mt-4">
              <ActionButton
                className="btn-explore-layout me-3 mb-1"
                variant="outline-light"
                style={{ padding: '0.6rem 1.5rem', borderRadius: '30px' }}
                type="button"
                icon={null}
                onClick={() => console.log('Explore Layouts')}
              >
                Explore Layouts
              </ActionButton>
              <ActionButton
                className="btn-get-it-now mb-1"
                variant="primary"
                style={{ padding: '0.6rem 1.5rem', borderRadius: '30px' }}
                type="button"
                icon={<RightCircleOutlined />}
                onClick={() => console.log('Get It Now')}
              >
                Get It Now
              </ActionButton>
            </div>
          </Col>

          {/* Right Section: Image */}
          <Col md={6} className="text-center mt-4 mt-md-0">
            <div className="hero-image">
              <img src={Hero1} alt="Hero" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Hero;
