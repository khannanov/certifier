import React, { PropTypes } from 'react'
import IconEditorMode from 'material-ui/svg-icons/editor/mode-edit'
import IconTimer from 'material-ui/svg-icons/image/timer'
import IconButton from 'material-ui/IconButton'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'

const CertificationsList = (props) => {
  const certifications = props.certifications.map(
    certification =>
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
