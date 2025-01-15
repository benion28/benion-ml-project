import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { MessageOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import '../styles/chat-suggestions.scss'
import { useSelector } from 'react-redux';

const ChatSuggestions = ({ suggestions = [], onSelectChatSuggestion }) => {
  const theme = useSelector((state) => state.ui.theme)

  return (
    <div className={`chat-suggestions ${theme}`}>
      <h6 className="px-3 py-2">Chat Suggestions</h6>
      <div className="suggestions-list px-3 py-2">
        {suggestions.length > 0 ? (
          suggestions.map((suggestion, index) => (
            <Row
              key={index}
              className="suggestion-item align-items-center mb-2 px-2 py-2"
              onClick={() => onSelectChatSuggestion(index)}
            >
              <Col sm={2} className="text-end">
                <MessageOutlined className="chat-icon" />
              </Col>
              <Col sm={10}>
                <span className="suggestion-title">{suggestion.text}</span>
              </Col>
            </Row>
          ))
        ) : (
          <p className="text-muted">No suggestions yet.</p>
        )}
      </div>
    </div>
  );
};

ChatSuggestions.propTypes = {
    suggestions: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            id: PropTypes.number,
        })
    ),
    onSelectChatSuggestion: PropTypes.func,
};

export default ChatSuggestions
