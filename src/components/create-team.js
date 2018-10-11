import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createTeam } from '../actions/teams';

class CreateTeam extends Component {

  renderField(field) {

    const { meta: { touched, error } } = field;

    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input 
          className="form-control"
          type="text"
          {...field.input}
          // onChange={field.input.onChange}
          // onFocus={field.input.onFocus}
          // ...
        />
        <div className="text-help">
        { touched ? error : '' }
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createTeam(values);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.creatingTeam && !nextProps.creatingTeam) {
      if (nextProps.creatingTeamSuccess) {
        this.props.history.push('/');
      } else if (nextProps.creatingTeamError){
        console.log('ERROR: ', nextProps.creatingTeamError)
      }
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field 
          label="Name"
          name="title"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if(!values.title) {
    errors.title = 'Enter a name!';
  }

  // if errors is empty object, the form is fine to submit
  return errors;
}
const mapToStateToProps = state => ({
  creatingTeam: state.teams.creatingTeam,
  creatingTeamSuccess: state.teams.creatingTeamSuccess,
  creatingTeamError: state.teams.creatingTeamError,
})

export default reduxForm({
  validate, //validate: validate
  form: 'CreateTeam'
})(
  connect(mapToStateToProps, { createTeam }) (CreateTeam)
);