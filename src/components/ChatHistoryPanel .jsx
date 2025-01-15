import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import '../styles/chat-history-panel.scss'
import { useSelector } from 'react-redux'

const ChatHistoryPanel = ({ chatHistory = [], onSelectConversation, onEdit, onDelete }) => {
  const theme = useSelector((state) => state.ui.theme)

  return (
    <div className={`chat-history-panel ${theme}`}>
      <div className="history-header">
        <h5>Chat History</h5>
      </div>
      <div className="history-list">
        {chatHistory.map((chat, index) => (
          <div key={index} className="history-item">
            <Row className="align-items-center">
              <Col xs={8} className="text-truncate">
                <span onClick={() => onSelectConversation(index)}>{chat.title}</span>
              </Col>
              <Col xs={4} className="text-end">
                <EditOutlined onClick={() => onEdit(chat.id)} className="icon edit-icon" />
                <DeleteOutlined onClick={() => onDelete(chat.id)} className="icon delete-icon" />
              </Col>
            </Row>
          </div>
        ))}
      </div>
    </div>
  );
};

ChatHistoryPanel.propTypes = {
  chatHistory: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelectConversation: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ChatHistoryPanel;
