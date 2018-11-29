import { applyMiddleware } from 'redux';
import Reactotron from '../ReactotronConfig'
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

const store = Reactotron.createStore(reducers, applyMiddleware(ReduxThunk));


export default store;
