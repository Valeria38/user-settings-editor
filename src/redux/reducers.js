import { combineReducers } from 'redux';
import * as types from './types';

const initialState = {
  data: [
    { name: 'Имя, телефон, email', id: 'name' },
    { name: 'Страна, часовой пояс, язык', data: 'Русский', id: 'country' },
    { name: 'Пароль и безопасность', id: 'password' },
    { name: 'Валюта', data: 'UAH', id: 'currency' },
    { name: 'Social login', id: 'socialLogin' },
    { name: 'Удалить аккаунт', id: 'deleteAccount' }
  ],
  dataToEdit: {
    name: 'John',
    surname: 'Doe',
    email: 'johndoe@gmail.com',
    phone: '+380501111111'
  }
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_NAME:
      return {
        ...state,
        dataToEdit: {
          ...state.dataToEdit,
          name: payload.name,
          surname: payload.surname
        }
      };
    case types.SET_EMAIL:
      return {
        ...state,
        dataToEdit: {
          ...state.dataToEdit,
          email: payload.email
        }
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer
});

export default rootReducer;
