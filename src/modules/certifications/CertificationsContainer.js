import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import CertificationsList from './components/CertificationsList'
import { getCertificationsList } from './actions'

export class CertificationsContainer extends Component {
  componentDidMount () {
    this.props.getCertificationsList();
  }

  render () {
    return (
      <div>
        <h1>List of certifications</h1>
        <CertificationsList certifications={this.props.certifications}/>
      </div>
    )
  }
}

CertificationsContainer.propTypes = {
  getCertificationsList: PropTypes.func,
  certifications: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string
    })
  )
}

CertificationsContainer.defaultProps = {
  certifications: {}
}

export default connect(state => ({
    certifications: state.certifications
  }),
  { getCertificationsList }
)(CertificationsContainer)
