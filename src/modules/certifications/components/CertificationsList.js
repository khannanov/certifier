import React, { PropTypes } from 'react'
import IconEditorMode from 'material-ui/svg-icons/editor/mode-edit'
import IconButton from 'material-ui/IconButton'
import Divider from 'material-ui/Divider'

const CertificationsList = (props) => {

  const certifications = props.certifications.map(
    certification =>
      <section key={certification.id}>
        <div>
          <h2>{certification.name}</h2>
          <p>{certification.description}</p>
          <IconButton tooltip="edit"
                      touch={true}
                      tooltipPosition="top-center"
                      href={`/edit/${certification.id}`}
          >
            <IconEditorMode/>
          </IconButton>
        </div>
        <Divider />
      </section>
  )

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
