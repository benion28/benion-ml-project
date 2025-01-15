import React from 'react'
import { Input } from 'antd'
import PropTypes from 'prop-types'
import '../../styles/text-input.scss'

const { TextArea, Search } = Input;

const TextInput = ({
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  onFocus,
  onBlur,
  disabled = false,
  isTextArea = false,
  isSearch = false,
  rows,
  prefix,
  required = false,
  style,
  title,
  maxLength,
  allowClear = false,
  className = '',
  onKeyPress,
  ...props
}) => {
  return isTextArea ? (
    <TextArea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      style={style}
      title={title}
      rows={rows}
      prefix={prefix}
      required={required}
      maxLength={maxLength}
      className={`text-input ${className}`}
      onKeyPress={onKeyPress}
      {...props}
    />
  ) : isSearch ? (
    <Search
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      style={style}
      title={title}
      prefix={prefix}
      required={required}
      disabled={disabled}
      allowClear={allowClear}
      className={`text-input ${className}`}
      onKeyPress={onKeyPress}
      {...props}
    />
  ) : (
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      prefix={prefix}
      required={required}
      style={style}
      title={title}
      allowClear={allowClear}
      maxLength={maxLength}
      className={`text-input ${className}`}
      onKeyPress={onKeyPress}
      {...props}
    />
  );
};

TextInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  title: PropTypes.string,
  onChange: PropTypes.func.is={},
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  isTextArea: PropTypes.bool,
  isSearch: PropTypes.bool,
  prefix: PropTypes.node,
  rows: PropTypes.number,
  maxLength: PropTypes.number,
  allowClear: PropTypes.bool,
  required: PropTypes.bool,
  className: PropTypes.string,
  onKeyPress: PropTypes.func
};

export default TextInput;
