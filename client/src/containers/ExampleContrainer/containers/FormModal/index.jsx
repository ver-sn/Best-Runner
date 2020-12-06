import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import {
  StyledModalContent,
  StyledClose,
  CloseIcon,
} from '../../containers/ExampleModal/styled';
import { hideModal } from '../../../../shared/modal/redux/actions';
import { addTraining } from '../../redux/actions';
import TrainingEdit from '../EditForm';

class FormModal extends Component {
  static propTypes = {
    hideModal: PropTypes.func.isRequired,
    addTraining: PropTypes.func.isRequired,
  };

  closeModal = (e) => {
    e.preventDefault();
    this.props.hideModal();
  };

  handleFormSubmit = (formValues) => {
    const error = {};

    if (!formValues.date) {
      error.date = 'Это поле обязательно для заполнения';
    }

    if (!formValues.mileage) {
      error.mileage = 'Это поле обязательно для заполнения';
    }

    if (!formValues.trainingType) {
      error.trainingType = 'Это поле обязательно для заполнения';
    }

    if (Object.keys(error).length) {
      throw new SubmissionError(error);
    }

    if (formValues.id) {
      this.props.addTraining(formValues);
    } else {
      const id = new Date();
      this.props.addTraining({ ...formValues, id: id.getTime().toString() });
    }
    this.props.hideModal();
  };

  render() {
    return (
      <StyledModalContent>
        <StyledClose onClick={this.closeModal}>
          <CloseIcon />
        </StyledClose>
        <TrainingEdit onSubmit={this.handleFormSubmit} />
      </StyledModalContent>);
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  hideModal,
  addTraining,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormModal);
