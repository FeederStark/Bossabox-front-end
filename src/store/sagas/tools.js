import { call, put, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../services/api';
import { Creators as ToolsCreators } from '../ducks/tools';

export function* getTools(action) {
  try {
    const { text, check } = action.payload;
    if (text === '') {
      const { data } = yield call(api.get, '/tools');

      yield put(ToolsCreators.getToolsSuccess(text, data));
    } else if (check === true) {
      const { data } = yield call(api.get, `/tools?tags_like=${text}`);

      yield put(ToolsCreators.getToolsSuccess(text, data));
    } else {
      const { data } = yield call(api.get, `/tools?q=${text}`);

      yield put(ToolsCreators.getToolsSuccess(text, data));
    }
  } catch (err) {
    toast.error('Error fetching tools', {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
}

export function* addTool(action) {
  const { data } = action.payload;
  if (data.title === '') {
    toast.error('Tool must have a title', {
      position: toast.POSITION.TOP_RIGHT,
    });
    return;
  }
  const isDuplicated = yield select(state => state.tools.data.find(tool => tool.title === data.title));

  if (isDuplicated) {
    toast.error('Tool already registered', {
      position: toast.POSITION.TOP_RIGHT,
    });
  } else {
    try {
      const response = yield call(api.post, '/tools', data);
      toast.success('Tool successfully added', {
        position: toast.POSITION.TOP_RIGHT,
      });
      yield put(ToolsCreators.addToolSuccess(response.data));
    } catch (err) {
      toast.error('Error adding tool', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }
}

export function* removeTool(action) {
  const { id } = action.payload;
  try {
    yield call(api.delete, `/tools/${id}`);
    toast.success('Tool successfully removed', {
      position: toast.POSITION.TOP_RIGHT,
    });
    yield put(ToolsCreators.getTools());
  } catch (err) {
    toast.error('Error removing tool', {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
}
