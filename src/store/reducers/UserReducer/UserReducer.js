import {CHANGE_LANGUAGE} from '../../actions/ActionTypes/ActionTypes';

const initialState = {
  setLanguage: 'en',
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        setLanguage: action.payload,
      };
    default:
      return state;
  }
};
export default UserReducer;
