/**
 * Types
 */

export const Types = {
  GET_TOOLS_REQUEST: 'tools/GET_REQUEST',
  GET_TOOLS_SUCCESS: 'tools/GET_SUCCESS',
  ADD_TOOL_REQUEST: 'tools/ADD_REQUEST',
  ADD_TOOL_SUCCESS: 'tool/ADD_SUCCESS',
  REMOVE_TOOL: 'tool/REMOVE',
};

/**
 * Reducers
 */

const INITIAL_STATE = [];
export default function tools(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_TOOLS_SUCCESS:
      return action.payload.data;
    case Types.ADD_TOOL_SUCCESS:
      return [...state, action.payload.data];
    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  getTools: () => ({
    type: Types.GET_TOOLS_REQUEST,
  }),
  getToolsSuccess: data => ({
    type: Types.GET_TOOLS_SUCCESS,
    payload: { data },
  }),
  addToolRequest: data => ({
    type: Types.ADD_TOOL_REQUEST,
    payload: { data },
  }),
  addToolSuccess: data => ({
    type: Types.ADD_TOOL_SUCCESS,
    payload: { data },
  }),
  removeTool: id => ({
    type: Types.REMOVE_TOOL,
    payload: { id },
  }),
};
