export default {
  ITEM: '/items',
  LOGIN: '/login',
  LOGOUT: '/logout',
  PROFILE: role =>  `/${role}/profile`,
  REGISTER: '/register',
  DASHBOARD: role => `/${role}`,
  RESET_PASSWORD: '/reset-password',
  FORGOT_PASSWORD: '/forgot-password',
  MYORDERS: '/customer/my-orders',
  CART: '/customer/cart',

  /* Admin routes */
  ALL_USERS: '/admin/users',
  NEW_USER: '/admin/users/add',
  USER_EDIT: _id => `/admin/users/edit/${_id}`,
  ALL_CATEGORIES: '/admin/categories',
  NEW_CATEGORY: '/admin/categories/add',
  CATEGORY_EDIT: _id => `/admin/categories/edit/${_id}`,
  ALL_ORDERS:`/admin/orders`,
  ALL_ITEMS:`/admin/items`,
  NEW_ITEM: '/admin/items/add',
  ITEM_EDIT: _id => `/admin/items/edit/${_id}`,
};