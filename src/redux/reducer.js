import multireducer from 'multireducer';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import { reducer as form } from 'redux-form';
import auth from './modules/auth';
import notifs from './modules/notifs';
import counter from './modules/counter';
import info from './modules/info';
import name from './modules/name';
import user from './modules/user';
// import widgets from './modules/widgets';
// import survey from './modules/survey';
// import chat from './modules/chat';

export default function createReducers(asyncReducers) {
  return {
    routing: routerReducer,
    reduxAsyncConnect,
    online: (v = true) => v,
    form,
    notifs,
    auth,
    //reducer baru
    name,
    user,
    counter: multireducer({
      counter1: counter,
      counter2: counter,
      counter3: counter
    }),
    info,
    // widgets,
    // survey,
    // chat,
    ...asyncReducers
  };
}
