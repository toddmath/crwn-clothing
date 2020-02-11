/* eslint-disable react/no-children-prop */
import React, { useEffect, lazy, Suspense } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { GlobalStyle } from './global.styles';
import { Spinner, ErrorBoundary, Header } from './components';

import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

const lazyImport = fileName => lazy(() => import(`${fileName}`));
const HomePage = lazyImport('./pages/homepage/homepage.component');
const ShopPage = lazyImport('./pages/shop/shop.component');
const CheckOutPage = lazyImport('./pages/checkout/checkout.component');
const SignInAndSignUpPage = lazyImport(
  './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
);

const App = ({ checkUserSession, currentUser }) => {
  const location = useLocation();

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Switch location={location}>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route path='/shop'>
              <ShopPage />
            </Route>
            <Route exact path='/checkout'>
              <CheckOutPage />
            </Route>
            <Route
              exact
              path='/signin'
              render={() =>
                currentUser ? (
                  <Redirect strict from='/signin' to='/' />
                ) : (
                  <SignInAndSignUpPage />
                )
              }
            />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = {
  checkUserSession,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
