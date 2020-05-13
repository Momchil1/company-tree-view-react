import {combineReducers} from 'redux';

const companiesReducer = (state = [], action) => {
    if (action.type === 'FETCH_COMPANIES') {
        return action.payload
    }
    return state
};
const companyAddressesReducer = (state = [], action) => {
    if (action.type === 'FETCH_COMPANY_ADDRESES') {
        return action.payload
    }
    return state
};
const employeesReducer = (state = [], action) => {
    if (action.type === 'FETCH_EMPLOYEES') {
        return action.payload
    }
    return state
};
const projectsReducer = (state = [], action) => {
  if (action.type === "FETCH_PROJECTS") {
    return action.payload;
  } else if (action.type === "CHANGE_PROJECT_NAME") {
    return state.map(project => {
      if (project.id === action.payload.id) {
        return action.payload;
      } else {
        return project;
      }
    });
  }
  return state;
};
const selectedNodeInitialState = {
  data: {},
  type: "",
  parentId: null,
};
const selectedNodeReducer = (state = selectedNodeInitialState, action) => {
    if (action.type === 'SELECT_NODE') {
        return action.payload
    }
    return state
};
const nodeInfoInitialState = {
    header: {},
    rows: [],
    button: false
}
const nodeInfoReducer = (state = nodeInfoInitialState, action) => {
    if (action.type === 'SET_NODE_INFO') {
        return action.payload
    }
    return state
};
const projectModalDataReducer = (state = {}, action) => {
    if (action.type === 'SET_PROJECT_MODAL_DATA') {
        return action.payload
    }
    return state
};
const changedProjectNameReducer = (state = {}, action) => {
  if (action.type === 'CHANGE_PROJECT_NAME') {
      return action.payload
  }
  return state
};
export default combineReducers({
    companies: companiesReducer,
    companyAddresses: companyAddressesReducer,
    employees: employeesReducer,
    projects: projectsReducer,
    selectedNode: selectedNodeReducer,
    nodeInfo: nodeInfoReducer,
    projectModalData: projectModalDataReducer,
    changedProjectName: changedProjectNameReducer
});