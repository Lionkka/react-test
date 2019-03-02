const initialState = [
  {
    id: 1,
    name: 'apple',
    description: 'very natural apple',
    category: 'fruits',
    color: 'red',
    size: 'medium',
    price: 100
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};