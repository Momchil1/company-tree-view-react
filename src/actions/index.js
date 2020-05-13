import axios from 'axios';
const baseUrl = 'http://localhost:3001';

export const fetchCompanies = () => {
  return async (dispatch) => {
    const response = await axios.get(`${baseUrl}/companies`);
    dispatch({ type: "FETCH_COMPANIES", payload: response.data });
  };
};
export const fetchCompanyAddresses = () => {
  return async (dispatch) => {
    const response = await axios.get(`${baseUrl}/company_addresses`);
    dispatch({ type: "FETCH_COMPANY_ADDRESES", payload: response.data });
  };
};
export const fetchEmployees = () => {
  return async (dispatch) => {
    const response = await axios.get(`${baseUrl}/employees`);
    dispatch({ type: "FETCH_EMPLOYEES", payload: response.data });
  };
};
export const fetchProjects = () => {
  return async (dispatch) => {
    const response = await axios.get(`${baseUrl}/projects`);
    dispatch({ type: "FETCH_PROJECTS", payload: response.data });
  };
};
export const selectNode = (node) => {
  return {
    type: "SELECT_NODE",
    payload: node,
  };
};
export const setNodeInfo = (node) => {
  return {
    type: "SET_NODE_INFO",
    payload: node,
  };
};
export const setProjectModalData = (data) => {
  return {
    type: "SET_PROJECT_MODAL_DATA",
    payload: data,
  };
};
export const changeProjectName = (id, name) => {
  return async (dispatch) => {
    const response = await axios.patch(`${baseUrl}/projects/${id}`, name);
    dispatch({ type: "CHANGE_PROJECT_NAME", payload: response.data });
  };
};