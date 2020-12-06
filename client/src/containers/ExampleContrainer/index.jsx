import React, { Component } from 'react';
import PropTypes, { object } from 'prop-types';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';
import { SubmissionError } from 'redux-form';
import Table from './containers/Table';
import {
  fetchTraining,
  fetchFilterTraining,
  deleteTraining,
  setTraining,
} from './redux/actions';
import Select from '../../shared/select/Select';
import { PrimaryButton } from '../../shared/styledComponents/Button';
import { showModal } from '../../shared/modal/redux/actions';
import { columns, filterOptions } from './constants';
import Flex from './style';

class ExampleComponent extends Component {
  static propTypes = {
    fetchTraining: PropTypes.func.isRequired,
    fetchFilterTraining: PropTypes.func.isRequired,
    deleteTraining: PropTypes.func.isRequired,
    trainings: PropTypes.arrayOf(object).isRequired,
    showModal: PropTypes.func.isRequired,
    setTraining: PropTypes.func.isRequired,
  };

  state = {
    selectedValue: '',
  };

  componentDidMount() {
    this.props.fetchTraining();
  }

  onSelect = (event) => {
    this.setState({ selectedValue: event.target.value });
    this.props.fetchFilterTraining(event.target.value);
  };

  onRowClick = (row) => {
    this.props.showModal('FormModal');
    this.props.setTraining(row.original);
  }

  addTraining = () => {
    this.props.setTraining({});
    this.props.showModal('FormModal');
  }

  handlePersonDataFormSubmit = (formValues) => {
    const error = {};

    if (!formValues.name) {
      error.name = 'Name required';
    }

    if (!formValues.surname) {
      error.surname = 'Surname required';
    }

    if (Object.keys(error).length) {
      throw new SubmissionError(error);
    }

    console.log(formValues);
  };

  handleDeleteButtonClick = (id) => {
    this.props.deleteTraining(id);
  };


  render() {
    const {
      trainings,
    } = this.props;

    return (
      <Row>
        <Flex>
          <Select
            value={this.state.selectedValue}
            label="Фильтр"
            options={filterOptions}
            onChange={this.onSelect}
          />
          <div>
            <PrimaryButton onClick={this.addTraining}>Добавить</PrimaryButton>
          </div>
        </Flex>
        {trainings && (
          <Table
            columns={columns}
            data={trainings}
            onClick={this.onRowClick}
            onDeleteButtonClick={this.handleDeleteButtonClick}
          />
        )}
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  trainings: state.example.training.trainings,
});

const mapDispatchToProps = {
  showModal,
  fetchTraining,
  fetchFilterTraining,
  deleteTraining,
  setTraining,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExampleComponent);
