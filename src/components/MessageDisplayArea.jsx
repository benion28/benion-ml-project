import React from 'react'
import PropTypes from 'prop-types'
import '../styles/message-display-area.scss'
import { useSelector } from 'react-redux'

const MessageDisplayArea = ({ history = [] }) => {
  const theme = useSelector((state) => state.ui.theme)

  return (
    <div className={`message-display-area ${theme}`}>
      <div className="message-list">
        {history.map((item, index) => (
          <div
            key={index}
            className={`message-item ${item.role === 'user' ? 'user-message' : 'ai-message'}`}
          >
            <span className="message-text">{item.message}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

MessageDisplayArea.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.oneOf(['user', 'ai']).isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default MessageDisplayArea
