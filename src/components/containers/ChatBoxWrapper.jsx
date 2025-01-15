import React from 'react'
import { Row, Col } from 'react-bootstrap'
import '../../styles/chat-box-wrapper.scss'
import { useSelector } from 'react-redux'

const ChatBoxWrapper = ({ children }) => {
  const theme = useSelector((state) => state.ui.theme)

  return (
    <div className={`chat-box-wrapper ${theme}`}>
      <div className="content-section px-3 py-3">
        <Row>
          <Col>{children}</Col>
        </Row>
      </div>
    </div>
  )
}

export default ChatBoxWrapper
