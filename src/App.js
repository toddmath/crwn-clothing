import React, { useEffect, lazy, Suspense } from 'react';
import posed, { PoseGroup } from 'react-pose';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import { GlobalStyle } from './global.styles';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const CheckOutPage = lazy(() => import('./pages/checkout/checkout.component'));
const SignInAndSignUpPage = lazy(() =>
  import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);

const RoutesContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 },
});

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <Route
      render={({ location }) => (
        <div>
          <GlobalStyle />
          <Header />
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <PoseGroup>
                <RoutesContainer key={location.key}>
                  <Switch location={location}>
                    <Route exact path='/' component={HomePage} key='home' />
                    <Route path='/shop' component={ShopPage} />
                    <Route
                      exact
                      path='/checkout'
                      component={CheckOutPage}
                      key='checkout'
                    />
                    <Route
                      exact
                      path='/signin'
                      key='signin'
                      render={() =>
                        currentUser ? (
                          <Redirect to='/' />
                        ) : (
                          <SignInAndSignUpPage />
                        )
                      }
                    />
                  </Switch>
                </RoutesContainer>
              </PoseGroup>
            </Suspense>
          </ErrorBoundary>
        </div>
      )}
    />
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
