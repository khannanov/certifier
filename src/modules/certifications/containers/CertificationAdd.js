import React, { Component, PropTypes } from 'react'
import CertificationForm from '../components/CertificationForm'
import { connect } from 'react-redux'
import { addCertification } from '../actions'

class CertificationAdd extends Component {
  //todo to reducer?
  state = {
    name: '',
    description: '',
    questions: [],
  }

  onSubmit = e => {
    e.preventDefault()

    this.props.addCertification(this.state)
  }

  onChange = field => e => {
    e.preventDefault()

    this.setState({ [field]: e.target.value })
  }

  render() {
    return (
      <div>
        <CertificationForm name={this.state.name}
                           description={this.state.description}
                           onSubmit={this.onSubmit}
                           onChange={this.onChange}
        />
      </div>
    )
  }
}

CertificationAdd.propTypes = {
  addCertification: PropTypes.func.isRequired
}

export default connect(null, { addCertification })(CertificationAdd)
