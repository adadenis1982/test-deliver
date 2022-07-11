import { GET_DATA, CREATE, UPDATE, DELETE } from '../actionTypes/deliversAT';

import * as api from '../api/index';

export const getData = () => async (dispatch) => {
  try {

    const { data } = await api.fetchData();

    dispatch({ type: GET_DATA, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createDeliver = (deliver) => async (dispatch) => {
  try {

    const { data } = await api.createDeliver(deliver);

    dispatch({ type: CREATE, payload: data });
    
  } catch (error) {
    console.log(error.message);
  }
};

export const updateDeliver = (id, deliver) => async (dispatch) => {
  try {
    const { data } = await api.updateDeliver(id, deliver);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteDeliver = (id) => async (dispatch) => {
  try {
    await api.deleteDeliver(id);

    dispatch({ type: DELETE, payload: +id });

  } catch (error) {
    console.log(error.message);
  }
};
