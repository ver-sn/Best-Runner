import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Input,
  Button,
} from 'reactstrap';
import Field from '../../../../../shared/redux-form-components/CustomField';
import { selectOptions } from '../../../constants';
import { StyleRow, TextArea, Select } from './styled';

const EditTrainingForm = ({ handleSubmit, onSubmit }) => (
  <Form onSubmit={handleSubmit(onSubmit)}>
    <Field
      id="id"
      name="id"
      type="hidden"
      component={Input}
    />
    <Field
      id="date"
      name="date"
      type="date"
      component={Input}
      placeholder="Укажите дату тренировки"
      label="Укажите дату тренировки"
    />
    <Field
      id="trainingType"
      name="trainingType"
      component={Select}
      label="Укажите тип тренировки"
    >
      {selectOptions.map(item => (
        <option key={item.value} value={item.label}>{item.label}</option>
      ))}
    </Field>
    <Field
      id="mileage"
      name="mileage"
      type="number"
      component={Input}
      placeholder="Укажите протяженность в км."
      label="Укажите протяженность в километрах"
    />
    <Field
      id="comment"
      name="comment"
      rows="4"
      component={TextArea}
      placeholder="Комментарий"
      label="Комментарий"
    />
    <StyleRow>
      <Button
        type="submit"
        color="primary"
      >
        Сохранить
      </Button>
    </StyleRow>
  </Form>
);

EditTrainingForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default EditTrainingForm;
