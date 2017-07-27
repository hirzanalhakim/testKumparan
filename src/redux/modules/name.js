const SET = 'redux-example/name/SET';
const RESET = 'redux-example/name/RESET';


const initialState = {
  name: ''
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET:
      return {
        name: action.name
      };
    case RESET:
      return {
        name: ''
      };
    default:
      return state;
  }
}

export function set(name) {
  return {
    type: SET,
    name 
  };
}


export function reset() {
  return {
    type: RESET
  };
}