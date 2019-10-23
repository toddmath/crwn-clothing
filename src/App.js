import React, { useEffect } from 'react';
import posed, { PoseGroup } from 'react-pose';
import { connect } from 'react-redux';
import {
  Redirect,
  Route,
  Switch,
  useLocation,
  useRouteMatch,
} from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import Header from './components/header/header.component';
// import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import { GlobalStyle } from './global.styles';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckOutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

// const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
// const ShopPage = lazy(() => import('./pages/shop/shop.component'));
// const CheckOutPage = lazy(() => import('./pages/checkout/checkout.component'));
// const SignInAndSignUpPage = lazy(() =>
//   import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
// );

const RoutesContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 },
});

const App = ({ checkUserSession, currentUser }) => {
  const location = useLocation();
  let match = useRouteMatch(); // eslint-disable-line prefer-const

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <ErrorBoundary>
        <PoseGroup>
          <RoutesContainer key={location.key}>
            <Switch location={location}>
              <Route exact path='/' component={HomePage} key='home' />
              <Route path='/shop' component={ShopPage} key='shop' />
              <Route
                exact
                path='/checkout'
                component={CheckOutPage}
                key={`${match.url}/checkout`}
              />
              <Route
                exact
                path='/signin'
                key={`${match.url}/signin`}
                render={() =>
                  currentUser ? (
                    <Redirect key='homesignin' from='/signin' to='/' />
                  ) : (
                    <SignInAndSignUpPage key='signin' />
                  )
                }
              />
            </Switch>
          </RoutesContainer>
        </PoseGroup>
      </ErrorBoundary>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
