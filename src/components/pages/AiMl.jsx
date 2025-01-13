import React from 'react'
import TitleNav from '../custom/TitleNav'
import { useSelector } from 'react-redux'
import { getThemeColor } from '../../services/helpers'
import DashCard from '../custom/DashCard'

const AiMl = () => {
  const theme = useSelector((state) => state.ui.theme)

  return (
    <div className='px-2' style={{ paddingTop: "120px", paddingBottom: "10px", backgroundColor: getThemeColor(theme).color  }}>
      <TitleNav title='AI & ML' theme={theme} />
      <DashCard
        title="Dashboard Title"
        containerClass={`${theme}`}
        contentClass="content-class"
        reversed={false}
      >
        <p style={{ color: getThemeColor(theme).color }}>This is the card content.</p>
      </DashCard>
    </div>
  )
}

export default AiMl