import React, { useEffect, lazy, Suspense } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components'; // eslint-disable-line no-restricted-imports

import theme from './styles/theme';
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { useDeepSelector, useDarkMode } from './hooks';
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

export default function App() {
  const location = useLocation();
  const currentUser = useDeepSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const darkMode = useDarkMode(false);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <>
      <ThemeProvider theme={theme} darkMode={darkMode.value}>
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
      </ThemeProvider>
    </>
  );
}

/*
TODO: change order to <Switch>, <ErrorBoundary>, <Suspense> and check for bugs.
TODO: Change <Route>'s to component props instead of children until '/signin' <Route>
*/

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
// });

// const mapDispatchToProps = {
//   checkUserSession,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
