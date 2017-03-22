import React, { PropTypes } from 'react'

const CertificationsList = (props) => {
  const certifications = props.certifications.map(certification => <li key={certification.id}>
    <div>{certification.name}</div>
    <div>{certification.description}</div>
  </li>)

  return <ul>{certifications}</ul>
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
