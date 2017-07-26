import {LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE} from '../actions/auth';

const getInitialState = () => ({
  loading: false,
  loggenIn: false,
  error: null
});

function auth (state = getInitialState(), action) {
  switch (action.type) {
    case LOGIN_USER_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }

    case LOGIN_USER_SUCCESS: {
      return {
        loading: false,
        loggenIn: true,
        error: null
      };
    }

    case LOGIN_USER_FAILURE: {
      return {
        loading: false,
        loggenIn: false,
        error: action.error
      };
    }

    default: {
      return state;
    }
  }
}

export default auth;
