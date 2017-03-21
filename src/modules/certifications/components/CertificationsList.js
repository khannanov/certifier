import React, { PropTypes } from 'react'

const CertificationsList = (props) => {
  if (!props.certifications) return <div>no certificates yet</div>;

  const certifications = props.certifications.map(certification => <li key={certification.id}>
    <div>{certification.name}</div>
    <div>{certification.description}</div>
  </li>)

  return <ul>{certifications}</ul>
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
