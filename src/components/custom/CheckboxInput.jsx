import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/checkbox-input.scss'

const CheckboxInput = ({
  checked = false,
  onChange,
  label = '',
  disabled = false,
  className = '',
  style,
  ...props
}) => {
  return (
    <div className={`checkbox-input ${className}`} style={style}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      {label && <label>{label}</label>}
    </div>
  )
}

CheckboxInput.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default CheckboxInput
