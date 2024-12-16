import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import '../../styles/loader.scss';
import { LoadingOutlined } from '@ant-design/icons';

const Loader = ({
  size = 'default',
  spinning = true,
  tip = '',
  indicator = null,
  className = '',
  style = {},
}) => {
  const customIndicator = <LoadingOutlined style={{ fontSize: 36 }} spin />;

  return (
    <div className={`spin-container ${className}`} style={style}>
      {indicator ? 
        <Spin size={size} spinning={spinning} tip={tip} indicator={customIndicator} />
      : 
        <Spin size={size} spinning={spinning} tip={tip} indicator={indicator} />
      }
    </div>
  );
};

Loader.propTypes = {
  size: PropTypes.oneOf(['small', 'default', 'large']),
  spinning: PropTypes.bool,
  tip: PropTypes.string,
  indicator: PropTypes.node, // Custom loading indicator
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Loader;
