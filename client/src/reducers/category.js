import { CATEGORY } from '../constants/actionTypes';
import * as reducers from '../helpers/commonReducer';

const initialState = {
  allIds: [],
  byId: {},
  ui: {},
  startIndex: 0,
  endIndex: 0,
  pageCount: 0,
  total: 0,
  idUI: {},
};

export default (state = initialState, action) => {
  switch(action.type) {
    case CATEGORY.FETCH_REQUEST:
      return {
        ...state, ui: { ...state.ui, isFetching: true },
      }
    case CATEGORY.FETCH_ALL_SUCCESS:
      return reducers.fetchData(state, action.payload);

    case CATEGORY.FETCH_FAILURE:
      return {
        ...state, ui: { ...state.ui, isFetching: false },
      }


    case CATEGORY.UPDATE_CATEGORY_STORE:
      return {
        ...state,
        byId: { ...state.byId, [action.payload._id]: action.payload }
      }

    case CATEGORY.ADD_REQUEST:
      return {
        ...state, ui: { ...state.ui, isAdding: true },
      }
    case CATEGORY.ADD_SUCCESS:
      return reducers.addData(state, action.payload);

    case CATEGORY.ADD_FAILURE:
      return {
        ...state, ui: { ...state.ui, isAdding: false },
      }


    case CATEGORY.EDIT_REQUEST:
      return reducers.editRequest(state, action.payload);
      
    case CATEGORY.EDIT_SUCCESS:
      return reducers.editSuccess(state, action.payload);

    case CATEGORY.EDIT_FAILURE:
      return reducers.editFailure(state, action.payload);

    case CATEGORY.TOGGLE_EDIT_STATE:
      return reducers.toggleEditState(state, action.payload);


    case CATEGORY.REMOVE_REQUEST:
      return reducers.removeRequest(state, action.payload);

    case CATEGORY.REMOVE_SUCCESS:
      return reducers.removeData(state, action.payload);

    case CATEGORY.REMOVE_FAILURE:
      return reducers.removeFailure(state, action.payload);


    case CATEGORY.REMOVE_LAST_ID:
      return reducers.removeLastId(state);

    case CATEGORY.FILL_REMAINING_DATA:
      return reducers.fillRemainingData(state, action.payload);

    default:
      return state;
  }
}