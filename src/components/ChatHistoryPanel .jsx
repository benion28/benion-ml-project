import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { DeleteOutlined, EditOutlined, PlusOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import '../styles/chat-history-panel.scss'
import { useSelector } from 'react-redux'
import { Popconfirm } from 'antd'
import useChat from '../state/hooks/useChat'
import Loader from './custom/Loader'

const ChatHistoryPanel = ({ chatHistory = [], onSelectConversation, onEdit }) => {
  const theme = useSelector((state) => state.ui.theme)
  const { isLoading } = useSelector((state) => state.chat)
  const { deleteChat, selectChat } = useChat()

  const handleDelete = (key) => {
    deleteChat(key)
  }

  return (
    <div className={`chat-history-panel ${theme}`}>
      <div className="history-header">
        <div className="d-flex justify-content-between">
          <h5>Chat History</h5>
          <PlusOutlined 
            onClick={() => selectChat(null)} 
            style={{ cursor: 'pointer', fontSize: '20px' }} 
          />
        </div>
      </div>
      { isLoading ? 
        <Loader tip="Loading, please wait..." /> 
        : 
        <div className="history-list">
          {chatHistory.map((chat, index) => (
            <div key={index} className="history-item">
              <Row className="align-items-center cursor-pointer">
                <Col xs={8} className="text-truncate">
                  <span style={{ cursor: 'pointer' }} onClick={() => onSelectConversation(index)}>{chat.title}</span>
                </Col>
                <Col xs={4} className="text-end">
                  <EditOutlined onClick={() => onEdit(chat.id)} className="icon edit-icon" />
                  <Popconfirm 
                    placement="left" 
                    title="Are you sure to delete this chat?" 
                    onConfirm={() => handleDelete(chat.$key)}
                    icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                  >
                    <DeleteOutlined className="icon delete-icon" />
                  </Popconfirm>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      }
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
