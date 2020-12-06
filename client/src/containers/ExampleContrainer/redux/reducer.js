import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchTrainingRequest,
  fetchTrainingSuccess,
  fetchTrainingFailure,

  fetchFilterTrainingRequest,
  fetchFilterTrainingSuccess,
  fetchFilterTrainingFailure,

  deleteTraining,
  setTraining,
  addTraining,
} from './actions';
import { deleteOneTraining, changeTraining } from '../../../utils/services';

const trainingDefaultState = {
  trainings: [],
  currentTraining: {},
  error: null,
  isFetching: false,
};

const trainingReducer = handleActions(
  {
    [fetchTrainingRequest](state) {
      return {
        ...state,
        isFetching: true,
      };
    },
    [fetchTrainingSuccess](state, { payload }) {
      return {
        ...state,
        trainings: payload,
        isFetching: false,
        error: null,
      };
    },
    [fetchTrainingFailure](state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
    [fetchFilterTrainingRequest](state) {
      return {
        ...state,
        isFetching: true,
      };
    },
    [fetchFilterTrainingSuccess](state, { payload }) {
      return {
        ...state,
        trainings: payload,
        isFetching: false,
        error: null,
      };
    },
    [fetchFilterTrainingFailure](state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
    [deleteTraining](state, { payload }) {
      return {
        ...state,
        trainings: deleteOneTraining(state.trainings, payload),
      };
    },
    [addTraining](state, { payload }) {
      return {
        ...state,
        trainings: changeTraining(state.trainings, payload),
      };
    },
    [setTraining](state, { payload }) {
      return {
        ...state,
        currentTraining: payload,
      };
    },
  },
  trainingDefaultState,
);

export default combineReducers({
  training: trainingReducer,
});
