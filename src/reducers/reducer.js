import { TEST_ACTION } from '../actions/action';

const initstate = {
  testdata: "reducer data"
};

function sixteenReducers(state=initstate, action) {
  switch(action.type) {
    case TEST_ACTION: {
      console.warn('TEST_ACTION reducer');
      return state;
    }
  }
}

export default (state=initstate, action) => {
  return state;
};




