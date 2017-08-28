//we have decided that we are using redux so we have to install and  import it
import {createStore} from 'redux';
//we need our data to put in the database
import state from "./state";

import reducers from "./reducers";

var store = createStore(reducers, state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
