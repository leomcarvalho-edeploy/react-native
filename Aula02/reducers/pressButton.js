
const initialState = [
  {
    pressed: false,
  },
];
const pressButton = (state = initialState, action) => {
  switch (action.type) {
    case 'PRESS_BUTTON':
      console.log('click');
      return [
        ...state,
        {
          pressed: true,
        },
      ];
    default:
      return state;
  }
};
export default pressButton;
