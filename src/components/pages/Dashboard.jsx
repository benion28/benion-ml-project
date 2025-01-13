import React from 'react'
import TitleNav from '../custom/TitleNav'
import { useSelector } from 'react-redux'
import { getThemeColor } from '../../services/helpers'

const Dashboard = () => {
  const theme = useSelector((state) => state.ui.theme)

  return (
    <div className='px-2' style={{ paddingTop: "120px", paddingBottom: "10px", backgroundColor: getThemeColor(theme).color  }}>
      <TitleNav title='Dashboard' theme={theme} />
    </div>
  )
}

export default Dashboard