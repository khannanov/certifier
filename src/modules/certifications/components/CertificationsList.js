import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'

const CertificationsList = (props) => {
  const certifications = props.certifications.map(certification => <div key={certification.id}>
    <div>{certification.name}</div>
    <div>{certification.description}</div>
    <Link to={`/edit/${certification.id}`}>Edit</Link>
  </div>)

  return <div>{certifications}</div>
}

CertificationsList.defaultProps = {
  certifications: []
}

CertificationsList.propTypes = {
  certifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string
    })
  ).isRequired
}

export default CertificationsList;
