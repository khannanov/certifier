import React, { Component, PropTypes } from 'react'
import { connect }  from 'react-redux'
import CertificationForm from '../components/CertificationForm'
import { updateCertification, fetchCertificationById } from '../actions'
import questions from '../../questions'
import RaisedButton from 'material-ui/RaisedButton'

const { QuestionListContainer } = questions.containers

export class CertificationEdit extends Component {
  state = {
    name: '',
    description: '',
    questions: []
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
    this.props.updateCertification(this.state)
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
        <CertificationForm name={this.state.name}
                           description={this.state.description}
                           onSubmit={this.onSubmit}
                           onChange={this.onChange}
        />
        <br/>
        <RaisedButton label="Add question"
                      primary={true}
                      href={`/certification/${this.state.id}/question/add/`}
                      labelPosition="before"
        />
        <QuestionListContainer questionsIds={this.state.questions}
                               certificationId={this.props.match.params.id}
        />
      </div>
    )
  }
}

CertificationEdit.propTypes = {
  certification: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    questions: PropTypes.array
  }),
  fetchCertificationById: PropTypes.func,
  editCertification: PropTypes.func
}


export default connect(({ certifications }, props) => ({
    // todo selector with questions
    certification: certifications[props.match.params.id]
}), { updateCertification, fetchCertificationById })(CertificationEdit)
