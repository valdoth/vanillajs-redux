//ACTION
const BUY_PHONE = "BUY_PHONE";
const BUY_TABLET = "BUY_TABLET";
const BUY_TV = "BUY_TV";

const buyPhone = () => {
  return {
    type: BUY_PHONE,
  };
}
const buyTablet = () => {
  return {
    type: BUY_TABLET,
  };
}
const buyTv = () => {
  return {
    type: BUY_TV,
  };
};

//Reducer

const initialStatePhones = {
  phones: 5,
  tablets: 10,
}

const initialStateTv = {
  tv: 20,
};

const phonesReducer = (state = initialStatePhones, action) => {
  switch(action.type) {
    case BUY_PHONE:
      return {
        ...state,
        phones: state.phones - 1
      };
      break;
    case BUY_TABLET:
      return {
        ...state,
        tablets: state.tablets - 1
      };
      break;
    default:
      return state;
      break;
  }
}

const tvReducer = (state = initialStateTv, action) => {
  switch (action.type) {
    case BUY_TV:
      return {
        ...state,
        tv: state.tv - 1,
      };
      break;
    
    default:
      return state;
      break;
  }
};

//Combine Reducer
const rootReducer = Redux.combineReducers({
  phone: phonesReducer,
  tv: tvReducer
})

//créer la data du store
const store = Redux.createStore(rootReducer);

//recuperer la data du store
const availiblePhones = document.getElementById('count');
const availibleTablets = document.getElementById("count-tab");
const availibleTv = document.getElementById("count-tv");

availiblePhones.innerHTML = store.getState().phone.phones;
availibleTablets.innerHTML = store.getState().phone.tablets;
availibleTv.innerHTML = store.getState().tv.tv;


//effectuer le dispatch d'une action
document.getElementById('buy-phone').addEventListener('click', () => {
  store.dispatch(buyPhone());
});

document.getElementById("buy-tablet").addEventListener("click", () => {
  store.dispatch(buyTablet());
});

document.getElementById("buy-tv").addEventListener("click", () => {
  store.dispatch(buyTv());
});

//listener
store.subscribe(() => {
  availiblePhones.innerHTML = store.getState().phone.phones;
  availibleTablets.innerHTML = store.getState().phone.tablets;
  availibleTv.innerHTML = store.getState().tv.tv;
})

