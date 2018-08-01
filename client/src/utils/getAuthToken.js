export const getAuthToken = () => {
  return localStorage.getItem('jwtToken');
};
