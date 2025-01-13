import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import '../../styles/dash-card.scss'

const DashCard = ({
  title,
  children,
  containerClass = '',
  contentClass = '',
  reversed = false,
}) => {
  const Header = (
    <Card.Header>
      {typeof title === 'string' ? <h5 className="m-0">{title}</h5> : title}
    </Card.Header>
  )

  return (
    <Card className={`dash-card ${containerClass} ${reversed ? 'reversed' : ''}`}>
      {!reversed && Header}
      <Card.Body className={contentClass}>{children}</Card.Body>
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
