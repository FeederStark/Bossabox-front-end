import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';
import { Creators as ToolsCreators } from '../ducks/tools';

export function* getTools() {
  try {
    const { data } = yield call(api.get, '/tools');

    yield put(ToolsCreators.getToolsSuccess(data));
  } catch (err) {
    console.log(err);
  }
}

export function* addTool(action) {
  const { data } = action.payload;
  const isDuplicated = yield select(state => state.tools.find(tool => tool.title === data.title));

  if (isDuplicated) {
    /**
     * apply toast
     */
  } else {
    try {
      const response = yield call(api.post, '/tools', data);
      /**
       * apply toast
       */
      yield put(ToolsCreators.addToolSuccess(response.data));
    } catch (err) {
      console.log(err);
    }
  }
}

export function* removeTool(action) {
  const { id } = action.payload;
  try {
    yield call(api.delete, `/tools/${id}`);
    /**
     * apply toast
     */
    yield put(ToolsCreators.getTools());
  } catch (err) {
    console.log(err);
  }
}
