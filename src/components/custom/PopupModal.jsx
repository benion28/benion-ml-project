import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';

const PopupModal = ({ visible, onCancel, title, children }) => {
  return (
    <Modal
      title={<span className="text-white">{title}</span>}
      open={visible}
      onCancel={onCancel}
      footer={null}
      className="custom-modal"
      centered
    >
      <div className="modal-content-wrapper">
        {children}
      </div>
    </Modal>
  );
};

PopupModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

PopupModal.defaultProps = {
  title: '',
};

export default PopupModal;
