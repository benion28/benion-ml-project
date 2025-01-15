import React from 'react'
import { SettingOutlined } from '@ant-design/icons'
import '../../styles/chat-footer-section.scss'
import { useSelector } from 'react-redux';

const ChatFooterSection = () => {
  const theme = useSelector((state) => state.ui.theme);

  return (
    <div className={`footer-section ${theme}`}>
      <div className="settings">
        <SettingOutlined className="settings-icon" />
      </div>
      <div className="links">
        <a href="/terms" className="footer-link">Terms</a>
        <a href="/privacy" className="footer-link">Privacy</a>
      </div>
      <div className="app-info">
        <span>AI ChatBox v1.0.0</span>
      </div>
    </div>
  )
}

export default ChatFooterSection
