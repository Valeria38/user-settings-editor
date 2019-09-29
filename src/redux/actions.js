import * as types from './types';

export const setName = newName => ({
  type: types.SET_NAME,
  payload: newName
});

export const setEmail = newEmail => ({
  type: types.SET_EMAIL,
  payload: newEmail
});
