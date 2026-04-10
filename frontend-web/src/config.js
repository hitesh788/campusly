const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://campusly-backend-kyrb.onrender.com';
const API_URL = `${API_BASE_URL}/api/v1`;
const AUTH_API_URL = `${API_BASE_URL}/api/v1/auth`;
const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || API_BASE_URL;

export { API_BASE_URL, API_URL, AUTH_API_URL, SOCKET_URL };