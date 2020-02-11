// import { all, call } from 'redux-saga/effects';
import { createRootSaga } from './helpers/saga.helpers';

import { shopSagas } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';
import { cartSagas } from './cart/cart.sagas';

// const sagas = [shopSagas, userSagas, cartSagas];

// export default function* rootSaga() {
//   // yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
//   yield all(sagas.map(saga => call(saga)));
// }

const rootSaga = createRootSaga([shopSagas, userSagas, cartSagas]);

export default rootSaga;
