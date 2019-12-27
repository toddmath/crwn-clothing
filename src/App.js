/* eslint-disable react/no-children-prop */
import React, { useEffect, StrictMode, lazy, Suspense } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { GlobalStyle } from './global.styles';
import { Spinner, ErrorBoundary, Header } from './components';

import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const CheckOutPage = lazy(() => import('./pages/checkout/checkout.component'));
const SignInAndSignUpPage = lazy(() =>
  import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);

const App = ({ checkUserSession, currentUser }) => {
  const location = useLocation();

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <>
      <GlobalStyle />
      <StrictMode>
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
      </StrictMode>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

// const mapDispatchToProps = dispatch => ({
//   checkUserSession: () => dispatch(checkUserSession()),
// });

const mapDispatchToProps = {
  checkUserSession,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
