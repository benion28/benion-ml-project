import React from 'react';
import { Menu } from 'antd';
import PropTypes from 'prop-types';
import '../../styles/menu-component.scss';

const MenuComponent = ({ mode, theme, className, items }) => {
  return (
    <Menu
      mode={mode}
      theme={theme}
      className={className}
      selectable={false}
      items={items}
    />
  );
};

MenuComponent.propTypes = {
  mode: PropTypes.oneOf(['horizontal', 'vertical']),
  theme: PropTypes.oneOf(['light', 'dark']),
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      className: PropTypes.string,
    })
  ).isRequired,
};

MenuComponent.defaultProps = {
  mode: 'horizontal',
  theme: 'light',
  className: '',
};

export default MenuComponent;
