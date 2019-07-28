import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ProtectedRoutes from './components/ProtectedRoutes';

import Home from './components/Home';
import Login from './components/user/Login';
import Register from './components/user/Register';
import ForgotPassword from './components/user/ForgotPassword';
import ResetPassword from './components/user/ResetPassword';
import Profile from './components/user/Profile';
import Dashboard from './components/Dashboard';
import Logout from './components/user/Logout';
import Item from './components/item/Item';
import SingleItem from './components/item/SingleItem';
import CategoryItems from './components/item/CategoryItems';
import UserOrders from './components/order/UserOrders';
import Cart from './components/customer/cart/Cart';



class Routes extends Component {
  render() {
    const { isLoggedIn, role } = this.props;
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route exact path="/items" component={Item} />
        <Route path="/items/:slug" component={SingleItem} />
        <Route path="/categories/:slug" component={CategoryItems} />
        <Route path="/logout" component={Logout} />

        {/* Customer Routes */}
        <ProtectedRoutes isLoggedIn={isLoggedIn} role={role} path="/customer/my-orders" component={UserOrders} />
        <ProtectedRoutes isLoggedIn={isLoggedIn} role={role} path="/customer/cart" component={Cart} />
        <ProtectedRoutes isLoggedIn={isLoggedIn} role={role} path="/customer/profile" component={Profile} />
        <ProtectedRoutes isLoggedIn={isLoggedIn} role={role} path="/customer/dashboard" component={Dashboard} />

        {/* Admin Routes */}
        <ProtectedRoutes isLoggedIn={isLoggedIn} role={role} path="/admin/profile" component={Profile} />
        <ProtectedRoutes isLoggedIn={isLoggedIn} role={role} path="/admin/dashboard" component={Dashboard} />

      </div>
    )

  }
};

const mapStateToProps = ({ auth }) => ({ isLoggedIn: auth.isLoggedIn, role: auth.user ? auth.user.role : null });
export default connect(mapStateToProps)(Routes);