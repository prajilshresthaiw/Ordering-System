import qs from 'query-string';
import pick from 'lodash/pick';

import { CATEGORY } from '../constants/actionTypes';
import { 
  getAll,
  addCategory,
  editCategory,
  removeCategory,
} from '../apiCalls/category';

import notify from '../helpers/notification';
import config from '../constants/config';

const fetchCategories = data => {
  const allIds = [];
  const byId = {};

  data.categories.forEach(category => {
    allIds.push(category._id);
    byId[category._id] = category;
  });

  return { allIds, byId };

}

export const get = (args = { currentPage: 1 }) => async dispatch => {

  const query = pick(args, ['skip', 'limit'])
  dispatch({ type: CATEGORY.FETCH_REQUEST });

  const { data: response } = await getAll(qs.stringify(query));
  
  if(response.status === 200) {
    const data = fetchCategories(response.data, dispatch);
    const paging = response.data.paging;
    const payload = {
      ...data,
      currentPage: args.currentPage,
      pageCount: Math.ceil(paging.total / config.dataPerPage),
      total: paging.total,
      startIndex: paging.startIndex,
      endIndex: paging.endIndex,
    };

    dispatch({ type: CATEGORY.FETCH_ALL_SUCCESS, payload });
  } else {
    dispatch({ type: CATEGORY.FETCH_FAILURE, payload: response.message });
  }
}

export const add = (data, opts = {}) => async dispatch => {
  dispatch({ type: CATEGORY.ADD_REQUEST});

  const { data: response } = await addCategory(data);
  
  if(response.status === 200) {
    const category = response.data;
    let _id = [];
    if(opts.currentPage && opts.currentPage === 1) {
      _id = [ category._id ];
    }

    dispatch({ type: CATEGORY.ADD_SUCCESS, payload: { data: category, _id } });
  } else {
    dispatch({ type: CATEGORY.ADD_FAILURE, payload: response.message });
    notify('error', response.message);
  }
}

export const edit = (_id, data) => async dispatch => {
  dispatch({ type: CATEGORY.EDIT_REQUEST, payload: _id });

  const { data: response } = await editCategory(_id, data);
  
  if(response.status === 200) {
    dispatch({ type: CATEGORY.EDIT_SUCCESS, payload: response.data });
  } else {
    dispatch({ type: CATEGORY.EDIT_FAILURE, payload: { _id, message: response.message } });
    notify('error', response.message);
  }
}

export const remove = _id => async dispatch => {
  dispatch({ type: CATEGORY.REMOVE_REQUEST, payload: { _id } });

  const { data: response } = await removeCategory(_id);
  
  if(response.status === 200) {
    dispatch({ type: CATEGORY.REMOVE_SUCCESS, payload: response.data });
  } else {
    dispatch({ type: CATEGORY.REMOVE_FAILURE, payload: { _id, message: response.message } });
    notify('error', response.message);
  }
}

export const toggleEditState = _id => dispatch =>  {
  dispatch({ type: CATEGORY.TOGGLE_EDIT_STATE, payload: { _id } });
}

export const removeLastId = _id => dispatch => {
  dispatch({ type: CATEGORY.REMOVE_LAST_ID })
}

export const fillRemainingDataWhenRemoving = args => async dispatch => {
  const { data: response } = await getAll(qs.stringify(args));
  
  if(response.status === 200) {
    let data = fetchCategories(response.data, dispatch);

    dispatch({ 
      type: CATEGORY.FILL_REMAINING_DATA, 
      payload: data,
    });
  }
};
