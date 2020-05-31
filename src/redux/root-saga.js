import { fork, all } from 'redux-saga/effects';

import {
  watchRegisterStarted,
  watchLoginStarted,
  watchFacebookAuthenticationStarted,
  watchRefreshTokenStarted,
} from './auth/auth.sagas';
import {
  watchUserFetch,
  watchUserUpdate,
  watchChangePassword
} from './user/user.sagas'
import {
  watchCategoriesFetch,
  watchCategoryProductsFetch
} from './categories/categories.sagas'
import {
  watchCartFetch,
  watchCartItemsFetch,
  watchAddCartItem,
  watchRemoveCartItem,
  watchUpdateCartItem,
} from './cart/cart.sagas';
import {
  watchSingleProductFetch
} from './products/products.sagas';
import {
  watchCouponFetch
} from './coupon/coupon.sagas';
import {
  watchPostOrder,
  watchOrderItemsFetch
} from './order/order.sagas';
import {
  watchPostInvoice,
  watchInvoiceItemsFetch
} from './invoice/invoice.sagas';
import {
  watchPostPayment,
  watchPaymentItemsFetch
} from './payment/payment.sagas';
import {
  watchFilteredProducts
} from './search/search.sagas';

function* rootSaga() {
  yield all([
    fork(watchRegisterStarted),
    fork(watchLoginStarted),
    fork(watchFacebookAuthenticationStarted),
    fork(watchRefreshTokenStarted),
    fork(watchCategoriesFetch),
    fork(watchCategoryProductsFetch),
    fork(watchCartFetch),
    fork(watchUserFetch),
    fork(watchUserUpdate),
    fork(watchChangePassword),
    fork(watchCartItemsFetch),
    fork(watchAddCartItem),
    fork(watchRemoveCartItem),
    fork(watchUpdateCartItem),
    fork(watchSingleProductFetch),
    fork(watchCouponFetch),
    fork(watchPostOrder),
    fork(watchPostInvoice),
    fork(watchPostPayment),
    fork(watchOrderItemsFetch),
    fork(watchInvoiceItemsFetch),
    fork(watchPaymentItemsFetch),
    fork(watchFilteredProducts)
  ]);
}


export default rootSaga;
