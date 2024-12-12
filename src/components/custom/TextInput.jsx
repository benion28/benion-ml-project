import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';
import '../../styles/text-input.scss';

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
  maxLength,
  allowClear = false,
  className = '',
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
      rows={rows}
      maxLength={maxLength}
      className={`text-input ${className}`}
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
      disabled={disabled}
      allowClear={allowClear}
      className={`text-input ${className}`}
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
      allowClear={allowClear}
      maxLength={maxLength}
      className={`text-input ${className}`}
      {...props}
    />
  );
};

TextInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
  isTextArea: PropTypes.bool,
  isSearch: PropTypes.bool,
  rows: PropTypes.number,
  maxLength: PropTypes.number,
  allowClear: PropTypes.bool,
  className: PropTypes.string,
};

export default TextInput;
