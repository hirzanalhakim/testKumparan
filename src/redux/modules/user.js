const LOAD = 'redux-example/user/LOAD';
const LOAD_SUCCESS = 'redux-example/user/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/user/LOAD_FAIL';

const initialState = {
  loaded: false
  // data: {
  //   results: []
  // }
};

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.info && globalState.info.loaded;
}

export function loadData(page = 1) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: ({ client }) => client.get(`/loadData?page=${page}`)
  };
}
