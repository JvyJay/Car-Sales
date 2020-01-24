import { add, rem } from '../Actions/appActions';

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  stuff: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

export const appReducers = (state = initialState, action) => {
  switch (action.type) {
    case add:
      return state.car.features.includes(action.payload)
        ? state
        : {
            ...state,
            additionalPrice: state.additionalPrice + action.payload.price,
            car: {
              ...state.car,
              features: [...state.car.features, action.payload]
            }
          };
    case rem:
      const remove = state.car.features.filter(item => {
        return item.id !== action.payload.id;
      });

      const newPrice = {
        ...state.car,
        features: remove,
        price: state.car.price - action.payload.price
      };
      const update = {
        ...state,
        car: newPrice
      };
      return update;
    default:
      return state;
  }
};

export default appReducers;
