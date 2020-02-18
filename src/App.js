import React, { useEffect, lazy, Suspense } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { useDeepSelector } from './hooks';
import { CartDropDownProvider } from './context/cart-dropdown.context';

import { GlobalStyle } from './global.styles';
import Header from './components/header/header.component';
import { Spinner, ErrorBoundary } from './components';

const lazyImport = fileName => lazy(() => import(`${fileName}`));
const HomePage = lazyImport('./pages/homepage/homepage.component');
const ShopPage = lazyImport('./pages/shop/shop.component');
const CheckOutPage = lazyImport('./pages/checkout/checkout.component');
const SignInAndSignUpPage = lazyImport(
  './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
);

const App = () => {
  const location = useLocation();
  const currentUser = useDeepSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <CartDropDownProvider>
        <Header />
      </CartDropDownProvider>
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

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
// });

// const mapDispatchToProps = {
//   checkUserSession,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
