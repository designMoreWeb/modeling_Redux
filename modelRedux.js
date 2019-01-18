console.clear();

//People dropping off a form (Action Creators)

const createPolicy = () =>{
  return{ //Action (a form in our case )
    type:'CREATE_POLICY',
  payload:{
    name,amount
    }
  };
};

const deletePolicy = () =>{
  return{
    type:'DELETE_POLICY',
    payload:{
      name
    }
  };
};

const createClaim = (name,amountOfMoneyToCollect) =>{
  return{
    type:'CREATE_CLAIM',
    payload: {
      name,amountOfMoneyToCollect
    }
  };
};

//Reducers
const claimsHistory = (oldListOfClaims = [], action) => {
  if(action.type === 'CREATE_CLAIM'){
    //we care about this action(FORM)
    return [...oldListOfClaims,action.payload];
  }
  //we don't care the action (FORM)
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) =>{
  if (action.type === 'CREATE_CLAIM'){
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  }else if(action.type === 'CREATE_POLICY'){
    return bagOfMoney + action.payload.amountl
  }
  
  return bagOfMoney;
};

const policies = (listOfPolicies = [],action) =>{
  if (action.type === 'CREATE_POLICY'){
    return [...listOfPolicies,action.payload.name];
  }else if(action.type === 'DELETE POLICY'){
    return listOfPolicies,filter(name => name !== action.payload.name);
  }
  return listOfPolicies;
