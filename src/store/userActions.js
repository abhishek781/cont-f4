// store/userActions.js
const loginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user,
  });
  
  const loginFailure = (error) => ({
    type: 'LOGIN_FAILURE',
    payload: error,
  });
  
  const setProfile = (user) => ({
    type: 'SET_PROFILE',
    payload: user,
  });
  
  export { loginSuccess, loginFailure, setProfile };
  