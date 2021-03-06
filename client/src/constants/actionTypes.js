export const USER = {
  LOGIN_RESET: 'login_reset',
  LOGIN_REQUEST: 'login_request',
  LOGIN_SUCCESS: 'login_success',
  LOGIN_FAILURE: 'login_failure',
  LOGIN_CLEAR: 'login_clear',

  LOGOUT_REQUEST: 'logout_request',
  LOGOUT_SUCCESS: 'logout_success',
  LOGOUT_FAILURE: 'logout_failure',

  FORGOT_PASSWORD_REQUEST: 'forgot_password_request',
  FORGOT_PASSWORD_SUCCESS: 'forgot_password_success',
  FORGOT_PASSWORD_ERROR: 'forgot_password_error',
  FORGOT_PASSWORD_FAILURE: 'forgot_password_failure',

  RESET_PASSWORD_REQUEST: 'reset_password_request',
  RESET_PASSWORD_SUCCESS: 'reset_password_success',
  RESET_PASSWORD_ERROR: 'reset_password_error',
  RESET_PASSWORD_FAILURE: 'reset_password_failure',

  REGISTER_REQUEST: 'register_request',
  REGISTER_SUCCESS: 'register_success',
  REGISTER_FAILURE: 'register_failure',

  ADD_USER_REQUEST: 'add_user_request',
  ADD_USER_SUCCESS: 'add_user_success',
  ADD_USER_FAILURE: 'add_user_failure',

  TOGGLE_EDIT_STATE: 'toggle_edit_state',

  EDIT_PROFILE_REQUEST: 'edit_profile_request',
  EDIT_PROFILE_SUCCESS: 'edit_profile_success',
  EDIT_PROFILE_FAILURE: 'edit_profile_failure',

  FETCH_PROFILE_REQUEST: 'fetch_profile_request',
  FETCH_PROFILE_SUCCESS: 'fetch_profile_success',
  FETCH_PROFILE_FAILURE: 'fetch_profile_failure',

  HANDLE_PROFILE_INPUT: 'handle_profile_input',

  FETCH_USER_REQUEST: 'fetch_user_request',
  FETCH_USER_SUCCESS: 'fetch_user_success',
  FETCH_USER_FAILURE: 'fetch_user_failure',

  EDIT_USER_REQUEST: 'edit_user_request',
  EDIT_USER_SUCCESS: 'edit_user_success',
  EDIT_USER_FAILURE: 'edit_user_failure',

  RESET_PASSWORD: 'reset_password',
  FORGOT_PASSWORD: 'forgot_password',
  FETCH_ERROR: 'fetch_user_error',
  EDIT_REQUEST: 'edit_user_request',
  EDIT_FAILURE: 'edit_user_failure',

  VERIFICATION_REQUEST: 'verification_request',
  VERIFICATION_SUCCESS: 'verification_success',
  VERIFICATION_FAILURE: 'verification_failure',
  VERIFICATION_CONFLICT: 'verification_conflict',

  FETCH_ALL_REQUEST: 'fetch_all_user_request',
  FETCH_ALL_SUCCESS: 'fetch_all_user_success',
  FETCH_ALL_FAILURE: 'fetch_all_user_failure',

  REMOVE_REQUEST: 'remove_user_request',
  REMOVE_SUCCESS: 'remove_user_success',
  REMOVE_FAILURE: 'remove_user_failure',

  FILL_REMAINING_DATA: 'fill_user_remaining_data',

  RESET_STATUS: 'reset_user_status',

  HANDLE_INPUT_CHANGE: 'handle_profile_input_change',

  HANDLE_EDIT_INPUT_CHANGE: 'handle_edit_input_change',

  UPDATE_ENTITY: 'update_user_entity',

}

export const MENU = {
  CHANGE_MENU: 'change_menu',
  INITIALIZE_MENU: 'initialize_menu',
  REMOVE_MENU: 'remove_menu',
}

export const ITEM = {
  FETCH_ALL_REQUEST: 'fetch_all_item_request',
  FETCH_ALL_SUCCESS: 'fetch_all_item_success',
  FETCH_ALL_FAILURE: 'fetch_all_item_failure',

  FETCH_SINGLE_REQUEST: 'fetch_single_item_request',
  FETCH_SINGLE_SUCCESS: 'fetch_single_item_success',
  FETCH_SINGLE_FAILURE: 'fetch_single_item_failure',
  
  FETCH_CATEGORY_REQUEST: 'fetch_category_item_request',
  FETCH_CATEGORY_SUCCESS: 'fetch_category_item_success',
  FETCH_CATEGORY_FAILURE: 'fetch_category_item_failure',

  ADD_REQUEST: 'add_item_request',
  ADD_SUCCESS: 'add_item_success',
  ADD_FAILURE: 'add_item_failure',

  REMOVE_REQUEST: 'remove_item_request',
  REMOVE_SUCCESS: 'remove_item_success',
  REMOVE_FAILURE: 'remove_item_failure',

  EDIT_REQUEST: 'update_item_request',
  EDIT_SUCCESS: 'update_item_success',
  EDIT_FAILURE: 'update_item_failure',

  UPDATE_ENTITY: 'update_item_entity',

  SAVE_EDITED_UPLOAD: 'save_edited_upload',

  EDIT_UPLOADING: 'item_uploading_avatar',

  REMOVE_LAST_ID: 'remove_last_item_id',
  FILL_REMAINING_DATA: 'fill_remaining_item_data',

  TOGGLE_EDIT_STATE: 'toggle_item_edit_state',

  RESET_STATUS: 'reset_item_status',

  HANDLE_INPUT_CHANGE: 'handle_item_input_change',
}

export const ORDER = {
  CREATE_REQUEST: 'create_order_request',
  CREATE_SUCCESS: 'create_order_success',
  CREATE_FAILURE: 'create_order_failure',

  FETCH_REQUEST: 'fetch_user_order_request',
  FETCH_SUCCESS: 'fetch_user_order_success',
  FETCH_FAILURE: 'fetch_user_order_failure',
  FETCH_ALL_SUCCESS: 'fetch_all_order_success',

  EDIT_REQUEST: 'edit_order_request',
  EDIT_SUCCESS: 'edit_order_success',
  EDIT_FAILURE: 'edit_order_failure',

  TOGGLE_EDIT_STATE: 'toggle_order_edit_state',

  UPDATE_ENTITY: 'update_order_entity',

  RESET_STATUS: 'update_order_status'
}

export const CART = {
  ADD_REQUEST: 'add_cart_request',
  ADD_SUCCESS: 'add_cart_success',
  ADD_FAILURE: 'add_cart_failure',

  FETCH_REQUEST: 'fetch_cart_request',
  FETCH_SUCCESS: 'fetch_cart_success',
  FETCH_FAILURE: 'fetch_cart_failure',

  REMOVE_REQUEST: 'remove_cart_request',
  REMOVE_SUCCESS: 'remove_cart_success',
  REMOVE_FAILURE: 'remove_cart_failure',

  FILL_REMAINING_DATA: 'fill_remaining_cart_data',

  CHANGE_QUANTITY: 'change_cart_quantity',
  CHANGE_COMBINED_ORDER: 'change_combined_order',
  SELECT_EVENT: 'select_order_event',

  RESET_STATUS: 'reset_cart_status',

  FLUSH: 'flush_cart',
}

export const CATEGORY = {
  ADD_REQUEST: 'add_category_request',
  ADD_SUCCESS: 'add_category_success',
  ADD_FAILURE: 'add_category_failure',

  FETCH_REQUEST: 'fetch_category_request',
  FETCH_ALL_SUCCESS: 'fetch_categories_success',
  FETCH_SINGLE_SUCCESS: 'fetch_category_success',
  FETCH_FAILURE: 'fetch_category_failure',

  REMOVE_REQUEST: 'remove_category_request',
  REMOVE_SUCCESS: 'remove_category_success',
  REMOVE_FAILURE: 'remove_category_failure',

  UPDATE_CATEGORY_STORE: 'update_category_store',

  EDIT_REQUEST: 'edit_category_request',
  EDIT_SUCCESS: 'edit_category_success',
  EDIT_FAILURE: 'edit_category_failure',

  TOGGLE_EDIT_STATE: 'toggle_category_edit_state',

  FILL_REMAINING_DATA: 'fill_remaining_category_data',

  REMOVE_LAST_ID: 'category_remove_last_id',

  RESET_STATUS: 'reset_category_status',

  HANDLE_INPUT_CHANGE: 'handle_category_input_change',
}

export const MEDIA = {
  ADD_REQUEST: 'add_media_request',
  ADD_SUCCESS: 'add_media_success',
  ADD_FAILURE: 'add_media_failure',

  UPDATE_MEDIA: 'update_media',

  CLEAR_UPLOADED_MEDIA: 'clear_uploaded_media',
}

export const EVENT = {
  ADD_REQUEST: 'add_event_request',
  ADD_SUCCESS: 'add_event_success',
  ADD_FAILURE: 'add_event_failure',

  FETCH_REQUEST: 'fetch_event_request',
  FETCH_ALL_SUCCESS: 'fetch_categories_success',
  FETCH_SINGLE_SUCCESS: 'fetch_event_success',
  FETCH_FAILURE: 'fetch_event_failure',

  REMOVE_REQUEST: 'remove_event_request',
  REMOVE_SUCCESS: 'remove_event_success',
  REMOVE_FAILURE: 'remove_event_failure',

  UPDATE_EVENT_STORE: 'update_event_store',

  EDIT_REQUEST: 'edit_event_request',
  EDIT_SUCCESS: 'edit_event_success',
  EDIT_FAILURE: 'edit_event_failure',

  TOGGLE_EDIT_STATE: 'toggle_event_edit_state',

  FILL_REMAINING_DATA: 'fill_remaining_event_data',

  REMOVE_LAST_ID: 'event_remove_last_id',

  RESET_STATUS: 'reset_event_status',

  HANDLE_INPUT_CHANGE: 'handle_event_input_change',

  UPDATE_ENTITY: 'update_event_entity',
}

export const ORDER_DETAIL = {
  FETCH_REQUEST: 'fetch_order_detail_request',
  FETCH_SUCCESS: 'fetch_order_detail_success',
  FETCH_FAILURE: 'fetch_order_detail_failure',
}