import React, { Component, PropTypes } from 'react'
import CertificationForm from '../components/CertificationForm'
import { connect }  from 'react-redux'
import { editCertification, fetchCertificationById } from '../actions'

class CertificationEdit extends Component {
  state = {
    name: '',
    description: ''
  }

  componentWillReceiveProps (nextProps) {
    this.setState(nextProps.certification);
  }

  componentDidMount () {
    if (!this.props.certification) {
      this.props.fetchCertificationById(this.props.match.params.id)
    }
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.editCertification(this.state)
  }

  onChange = field => e => {
    e.preventDefault()
    this.setState({ [field]: e.target.value })
  }

  render() {
    if (!this.props.certification) {
      return <did>loading...</did>
    }

    return (
      <div>
        <CertificationForm {...this.state}
                           onSubmit={this.onSubmit}
                           onChange={this.onChange}
        />
      </div>
    )
  }
}

CertificationEdit.propTypes = {
  certification: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }),
  fetchCertificationById: PropTypes.func,
  editCertification: PropTypes.func
}


export default connect((state, props) => ({
  certification: state.certifications.filter(c => c.id === props.match.params.id)[0]
}), { editCertification, fetchCertificationById })(CertificationEdit)
