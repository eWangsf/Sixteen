import { TEST_ACTION } from '../actions';

const initstate = {
  data: "initstate data in reducer.js"
};

function sixteenReducers(state=initstate, action) {
  switch(action.type) {
    case TEST_ACTION: {
      return Object.assign({}, state, {
        data: 'state after reducer'
      })
    }
    default:
      return state;
  }
}

export default sixteenReducers;



