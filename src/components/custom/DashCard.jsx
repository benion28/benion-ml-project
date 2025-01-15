import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import '../../styles/dash-card.scss'

const {Header: BootstrapHeader, Body: BootstrapBody} = Card

const DashCard = ({
  title,
  children,
  containerClass = '',
  contentClass = '',
  reversed = false,
}) => {
  const Header = (
    <BootstrapHeader>
      {typeof title === 'string' ? <h5 className="m-0">{title}</h5> : title}
    </BootstrapHeader>
  )

  return (
    <Card className={`dash-card ${containerClass} ${reversed ? 'reversed' : ''}`}>
      {!reversed && Header}
      <BootstrapBody className={contentClass}>{children}</BootstrapBody>
      {reversed && Header}
    </Card>
  )
}

DashCard.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node,
  containerClass: PropTypes.string,
  contentClass: PropTypes.string,
  reversed: PropTypes.bool,
}
export default DashCard
