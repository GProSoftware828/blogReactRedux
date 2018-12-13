export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USERS': //variable listed as posts, not as users...
      return [...state, action.payload];
    default:
      return state;
  }
};