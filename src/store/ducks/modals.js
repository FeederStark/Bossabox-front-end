/**
 * Types
 */

export const Types = {
  OPEN_ADD_MODAL: 'add_modal/OPEN',
  CLOSE_ADD_MODAL: 'add_modal/CLOSE',
  OPEN_REMOVE_MODAL: 'remove_modal/OPEN',
  CLOSE_REMOVE_MODAL: 'remove_modal/CLOSE',
};

/**
 * Reducers
 */

const INITIAL_STATE = {
  add_modal: false,
  remove_modal: false,
  tool_id: null,
};
export default function tools(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN_ADD_MODAL:
      return { ...state, add_modal: true };
    case Types.CLOSE_ADD_MODAL:
      return { ...state, add_modal: false };
    case Types.OPEN_REMOVE_MODAL:
      return { ...state, remove_modal: true, tool_id: action.payload.id };
    case Types.CLOSE_REMOVE_MODAL:
      return { ...state, remove_modal: false, tool_id: null };
    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  openAddModal: () => ({
    type: Types.OPEN_ADD_MODAL,
  }),
  closeAddModal: () => ({
    type: Types.CLOSE_ADD_MODAL,
  }),
  openRemoveModal: id => ({
    type: Types.OPEN_REMOVE_MODAL,
    payload: { id },
  }),
  closeRemoveModal: () => ({
    type: Types.CLOSE_REMOVE_MODAL,
  }),
};
