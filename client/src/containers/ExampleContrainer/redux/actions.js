import { createAction } from 'redux-actions';
import api from '../../../utils/ApiClient';

export const fetchTrainingRequest = createAction('FETCH_TRAINING_REQUEST');
export const fetchTrainingSuccess = createAction('FETCH_TRAINING_SUCCESS');
export const fetchTrainingFailure = createAction('FETCH_TRAINING_FAILURE');

export const fetchTraining = () => async (dispatch) => {
  try {
    dispatch(fetchTrainingRequest());

    const response = await api.example.getTrainings();
    const { trainings } = response.data;

    dispatch(fetchTrainingSuccess(trainings));
  } catch (error) {
    dispatch(fetchTrainingFailure(error));
  }
};

export const fetchFilterTrainingRequest = createAction('FETCH_FILTER_TRAINING_REQUEST');
export const fetchFilterTrainingSuccess = createAction('FETCH_FILTER_TRAINING_SUCCESS');
export const fetchFilterTrainingFailure = createAction('FETCH_FILTER_TRAINING_FAILURE');

export const fetchFilterTraining = option => async (dispatch) => {
  try {
    dispatch(fetchFilterTrainingRequest());

    const response = await api.example.getFilteredTrainings(option);
    const { trainings } = response.data;

    dispatch(fetchFilterTrainingSuccess(trainings));
  } catch (error) {
    dispatch(fetchFilterTrainingFailure(error));
  }
};

export const deleteTraining = createAction('DELETE_TRAININGS');
export const addTraining = createAction('ADD_TRAININGS');
export const setTraining = createAction('SET_TRAININGS');
