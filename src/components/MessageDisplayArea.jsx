import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import '../styles/message-display-area.scss'
import TypingEffect from './TypingEffect';
import { useSelector } from 'react-redux'

const MessageDisplayArea = ({ history = [] }) => {
  const theme = useSelector((state) => state.ui.theme)
  const { isTyping, isError, error, isLoading } = useSelector((state) => state.chat)
  const messageListRef = useRef(null);

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight
    }
  }, [history, isTyping, isLoading]);

  return (
    <div className={`message-display-area ${theme}`}>
      <div ref={messageListRef} className="message-list">
        {history.map((item, index) => (
          <div
            key={index}
            className={`message-item ${item.role === 'user' ? 'user-message' : 'ai-message'}`}
          >
            <span className="message-text">{item.message}</span>
          </div>
        ))}
        { isTyping && 
          <div
            key={history.length}
            className={`message-item ai-message`}
          >
            <span className="message-text">
              <TypingEffect texts={['Typing...']} />
            </span>
            <span className="message-text">
              <span className="d-flex flex-direction-row">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="loading-dot"></div>
                ))}
              </span>
            </span>
          </div>
        }
        { isError && 
          <div
            key={history.length}
            className={`message-item ai-message`}
          >
            <span className="text-danger">{error}</span>
          </div>
        }
      </div>
    </div>
  )
}

MessageDisplayArea.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      role: PropTypes.oneOf(['user', 'model']).isRequired,
      message: PropTypes.string.isRequired,
    })
  ).isRequired
}

export default MessageDisplayArea
