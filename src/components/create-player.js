import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createPlayer } from '../actions/players';

class CreatePlayer extends Component {

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
    this.props.createPlayer(values);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.creatingPlayer && !nextProps.creatingPlayer) {
      if (nextProps.creatingPlayerSuccess) {
        this.props.history.push('/');
      } else if (nextProps.creatingPlayerError){
        console.log('ERROR: ', nextProps.creatingPlayerError)
      }
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div>
        <Field 
          label="Name"
          name="title"
          component={this.renderField}
        />
        </div>
        <div>
        <label htmlFor="isActive">isActive</label>
        <Field
            name="isActive"
            id="isActive"
            component="input"
            type="checkbox"
          />
        </div>
        <div>
        <Field 
          label="Points"
          name="points"
          component={this.renderField}
        />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if(values.points < 0 || !Number.isInteger(Number(values.points))) {
    errors.points = 'Points must be positive integer!';
  }

  // if errors is empty object, the form is fine to submit
  return errors;
}
const mapToStateToProps = state => ({
  creatingPlayer: state.players.creatingPlayer,
  creatingPlayerSuccess: state.players.creatingPlayerSuccess,
  creatingPlayerError: state.players.creatingPlayerError,
})

export default reduxForm({
  validate: validate,
  form: 'CreatePlayer'
})(
  connect(mapToStateToProps, { createPlayer }) (CreatePlayer)
);