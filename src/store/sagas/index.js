import { all, takeLatest } from 'redux-saga/effects';
import { getTools, addTool, removeTool } from './tools';
import { Types as ToolsTypes } from '../ducks/tools';

export default function* rootSaga() {
  yield all([
    takeLatest(ToolsTypes.GET_TOOLS_REQUEST, getTools),
    takeLatest(ToolsTypes.ADD_TOOL_REQUEST, addTool),
    takeLatest(ToolsTypes.REMOVE_TOOL, removeTool),
  ]);
}
