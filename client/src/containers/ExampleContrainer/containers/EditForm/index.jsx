/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import EditTrainingForm from './components/EditTrainingForm';

class TrainingEdit extends Component {
  render() {
    const { handleSubmit, onSubmit } = this.props;
    return (
      <EditTrainingForm
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    );
  }
}

TrainingEdit.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  initialValues: state.example.training.currentTraining,
});

export default connect(mapStateToProps)(reduxForm({
  form: 'editTrainingForm',
  enableReinitialize: true,
})(TrainingEdit));
