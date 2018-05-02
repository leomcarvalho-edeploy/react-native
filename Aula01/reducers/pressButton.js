import { PRESS_BUTTON } from '../constants/ActionTypes';

const initialState = [
  {
    completed: false,
  },
];

export default function pressButton(state = initialState, action) {
  switch (action.type) {
    case PRESS_BUTTON:
      return [
        ...state,
        {
          completed: false,
        },
      ];
    default:
      return state;
  }
}

