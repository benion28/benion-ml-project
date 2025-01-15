import React from 'react'
import '../../styles/chat-header-section.scss'
import { SettingOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'

const ChatHeaderSection = ({ title = "AI Chat Box"}) => {
  const theme = useSelector((state) => state.ui.theme)

  return (
    <div className={`header-section ${theme} d-flex justify-content-between align-items-center px-3 py-2`}>
        <h5 className="m-0">{title}</h5>
        <div className="settings-icon">
          <SettingOutlined style={{ fontSize: '1.5rem' }} />
        </div>
      </div>
  )
}

export default ChatHeaderSection