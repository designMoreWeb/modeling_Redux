console.clear();

//People dropping off a form (Action Creators)

const createPolicy = (name, amount) => {
  return { //Action (a form in our case )
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  };
};

const deletePolicy = () => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name
    }
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name,
      amountOfMoneyToCollect
    }
  };
};

//Reducers
const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM') {
    //we care about this action(FORM)
    return [...oldListOfClaims, action.payload];
  }
  //we don't care the action (FORM)
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 120, action) => {
  if (action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount
  }

  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === 'DELETE POLICY') {
    return listOfPolicies, filter(name => name !== action.payload.name);
  }
  return listOfPolicies;
};

const {
  createStore,
  combineReducers
} = Redux;

const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

//Redux store
const store = createStore(ourDepartments);

//Testing actions out
store.dispatch(createPolicy('Alex', 20));
store.dispatch(createPolicy('Jim', 90));
store.dispatch(createPolicy('Bob', 40));
store.dispatch(createPolicy('Jane', 50));

store.dispatch(createClaim('Alex', 100));
store.dispatch(createClaim('Jim', 20));
store.dispatch(createClaim('Bob', 50));
store.dispatch(createClaim('Jane', 30));

store.dispatch(deletePolicy('Bob'));

console.log(store.getState());
