export default {
  HOME: '/',
  ITEM: '/items',
  LOGIN: '/login',
  LOGOUT: '/logout',
  PROFILE: role =>  `/${role}/profile`,
  REGISTER: '/register',
  DASHBOARD: role => `/${role}/dashboard`,
  RESET_PASSWORD: '/reset-password',
  FORGOT_PASSWORD: '/forgot-password',
  MYORDERS: '/customer/my-orders',
  CART: '/customer/cart',

  /* Admin routes */
  ALL_USERS: '/admin/users',
  NEW_USER: '/admin/new-user',
  USER_EDIT: _id => `/admin/edit-user/${_id}`,
  ALL_CATEGORIES: '/admin/categories',
  NEW_CATEGORY: '/admin/new-category',
  CATEGORY_EDIT: slug => `/admin/edit-category/${slug}`,
};