import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import '../../styles/action-button.scss';

const ActionButton = ({
  className = '',
  variant = 'primary', // Default to primary variant
  onClick,
  style,
  type = 'button',
  icon,
  disabled = false,
  children,
  ...props
}) => {
  return (
    <Button
      className={`action-button ${variant} ${className}`}
      onClick={onClick}
      style={style}
      type={type}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="button-icon">{icon}</span>} 
      {children && <span>{children}</span>}
    </Button>
  );
};

ActionButton.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'outline-light', 'text']),
  onClick: PropTypes.func,
  style: PropTypes.object,
  type: PropTypes.oneOf(['button', 'primary', 'submit', 'reset']),
  icon: PropTypes.node,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

export default ActionButton;
