import React, { PropTypes } from 'react'
import IconEditorMode from 'material-ui/svg-icons/editor/mode-edit'
import IconTimer from 'material-ui/svg-icons/image/timer'
import RaisedButton from 'material-ui/RaisedButton'
import { Card, CardActions, CardHeader } from 'material-ui/Card'

const CertificationsList = ({ certifications }) => {
  const renderedCerts = Object.keys(certifications).map(id => {
      const certification = certifications[id]

      return (
        <Card key={certification.id} style={{marginBottom: 20}}>
          <CardHeader
            title={certification.name}
            titleStyle={{fontSize: 24}}
            subtitle={certification.description}
          />
          <CardActions>
            <RaisedButton label="Start"
                          primary={true}
                          labelPosition="before"
                          href={`/edit/${certification.id}`}
                          icon={<IconTimer/>}
            />
            <RaisedButton label="Edit"
                          primary={true}
                          href={`/edit/${certification.id}`}
                          labelPosition="before"
                          icon={<IconEditorMode/>}
            />
          </CardActions>
        </Card>
      )
    }
  )

  return <div>{renderedCerts}</div>
}

CertificationsList.defaultProps = {
  certifications: []
}

CertificationsList.propTypes = {
  certifications: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string
    })
  ).isRequired
}

export default CertificationsList;
