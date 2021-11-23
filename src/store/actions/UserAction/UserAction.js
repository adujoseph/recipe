import {CHANGE_LANGUAGE} from '../ActionTypes/ActionTypes';

export const setDefaultLang = payload => dispatch => {
  console.log('default language selected: ', payload);
  dispatch({
    type: CHANGE_LANGUAGE,
    payload: payload,
  });
};
