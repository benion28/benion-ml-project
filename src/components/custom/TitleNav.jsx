import React from 'react'
import PropTypes from 'prop-types'
import { ArrowLeftOutlined } from '@ant-design/icons'
import '../../styles/title-nav.scss'

const TitleNav = ({ 
  title, 
  actions, 
  actionClass = '', 
  className = '', 
  theme = 'light' 
}) => {

  return (
    <div className={`title-nav ${theme} ${className}`}>
      <div className="logo-container d-inline-flex align-items-center">
        <ArrowLeftOutlined onClick={() => window.history.back()} className='logo-text' style={{ fontSize: '24px', cursor: 'pointer' }} />
        <strong className="ps-2 logo-text">{title}</strong>
      </div>
      {actions && (
        <div className={`d-inline-flex align-items-center ${actionClass}`}>
          {actions}
        </div>
      )}
    </div>
  )
}

TitleNav.propTypes = {
  title: PropTypes.node.isRequired,
  actions: PropTypes.node,
  actionClass: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
}

export default TitleNav
