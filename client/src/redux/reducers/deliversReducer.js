import { GET_DATA, CREATE, DELETE, UPDATE } from '../actionTypes/deliversAT';

export const deliversReducer = (state = { subjects: [], delivers: [] }, action) => {
  switch (action.type) {
    case GET_DATA:
      return {...state, subjects: action.payload.subjects, delivers: action.payload.delivers};
    case CREATE:
      return { ...state, delivers: [...state.delivers, action.payload] };
    case UPDATE:
      return { ...state, delivers: state.delivers.map((deliver) => deliver.id === action.payload.id ? action.payload : deliver)};
    case DELETE:
      return { ...state, delivers: state.delivers.filter((deliver) => deliver.id !== action.payload) };
    default:
      return state;
  }
};
