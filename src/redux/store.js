import { combineReducers, createStore , applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { mainPageReducer } from './reducer/mainPageReducer';
import { pateintReducer,singlePateintReducer,addPateintReducer } from './reducer/pateintReducer';
import { doctorReducer, addDoctorReducer ,singleDoctorReducer} from './reducer/doctorReducer';
import { staffReducer,singleStaffReducer,addStaffReducer} from './reducer/staffReducer';
import { accountReducer, accountAllReducer,addPaymentReducer } from './reducer/accountReducer';
import { appointReducer , appointFetchReducer , appointMakeDone , appointPateintReducer, addAppointReducer} from './reducer/appointmentReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    mainPageReducer,
    pateintReducer,
    singlePateintReducer,
    addPateintReducer,
    doctorReducer,
    addDoctorReducer,
    singleDoctorReducer,
    staffReducer,
    singleStaffReducer,
    addStaffReducer,
    accountReducer,
    accountAllReducer,
    addPaymentReducer,
    appointReducer,
    appointFetchReducer,
    appointMakeDone,
    appointPateintReducer,
    addAppointReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store