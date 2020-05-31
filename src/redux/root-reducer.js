import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';

import auth, * as authSelectors from './auth/auth.reducer';
import user, * as userSelectors from './user/user.reducer';
import categories, * as categoriesSelectors from './categories/categories.reducer';
import cart, * as cartSelectors from './cart/cart.reducer';
import products, * as productsSelectors from './products/products.reducer';
import coupon, * as couponSelectors from './coupon/coupon.reducer';
import order, * as orderSelectors from './order/order.reducer';
import invoice, * as invoiceSelectors from './invoice/invoice.reducer';
import payment, * as paymentSelectors from './payment/payment.reducer';

const reducer = combineReducers({
    auth,
    categories,
    cart,
    user,
    products,
    coupon,
    order,
    invoice,
    payment,
    form: formReducer
  });
  
export default reducer;

export const getAuthToken = state => authSelectors.getAuthToken(state.auth);
export const getIsRegistering = state => authSelectors.getIsRegistering(state.auth);
export const getRegisteringError = state => authSelectors.getRegisteringError(state.auth);
export const getIsAuthenticating = state => authSelectors.getIsAuthenticating(state.auth);
export const getAuthenticatingError = state => authSelectors.getAuthenticatingError(state.auth);
export const getIsAuthenticatingFacebook = state => authSelectors.getIsAuthenticatingFacebook(state.auth);
export const getAuthenticatingFacebookError = state => authSelectors.getAuthenticatingFacebookError(state.auth);
export const isAuthenticated = state => getAuthToken(state) != null;
export const getAuthUserID = state => authSelectors.getAuthUserID(state.auth);
export const getAuthExpiration = state => authSelectors.getAuthExpiration(state.auth);
export const getAuthUsername = state => authSelectors.getAuthUsername(state.auth);
export const getIsRefreshingToken = state => authSelectors.getIsRefreshingToken(state.auth);
export const getRefreshingError = state => authSelectors.getRefreshingError(state.auth);

export const getUser = (state) => userSelectors.getUser(state.user);
export const getIsFetchingUser = (state) => userSelectors.getIsFetchingUser(state.user);
export const getIsFetchingUserError = state => userSelectors.getFetchingUserError(state.user);

export const getCategories = state => categoriesSelectors.getCategories(state.categories);
export const getCategoryProducts = state => categoriesSelectors.getCategoryProducts(state.categories);
export const getIsFetchingCategories = state => categoriesSelectors.getIsFetchingCategories(state.categories);
export const getIsFetchingCategoriesError = state => categoriesSelectors.getIsFetchingCategoriesError(state.categories);

export const getCartItem = (state, id) => cartSelectors.getCartItem(state.cart, id);
export const getCartItems = (state) => cartSelectors.getCartItems(state.cart);
export const getIsFetchingCartItems = (state) => cartSelectors.getIsFetchingCartItems(state.cart);
export const getIsFetchingCartItemsError = state => cartSelectors.getIsFetchingCartItemsError(state.cart);
export const getCartItemByProductId = (state,productId) => cartSelectors.getCartItemByProductId(state.cart, productId);
export const getAddCartItemError = (state) => cartSelectors.getAddCartItemError(state.cart);
export const getRemoveCartItemError = (state) => cartSelectors.getRemoveCartItemError(state.cart);
export const getUpdateCartItemError = (state) => cartSelectors.getUpdateCartItemError(state.cart);
export const getCart = state => cartSelectors.getCart(state.cart);
export const getIsFetchingCart = state => cartSelectors.getIsFetchingCart(state.cart);
export const getFetchCartError = state => cartSelectors.getFetchCartError(state.cart); 

export const getProduct = (state,id) => productsSelectors.getProduct(state.products,id);
export const getProducts = state => productsSelectors.getProducts(state.products);

export const getCoupon = state => couponSelectors.getCoupon(state.coupon);
export const getIsFetchingCoupon = state => couponSelectors.getIsFetchingCoupon(state.coupon);
export const getFetchingCouponError = state => couponSelectors.getFetchingCouponError(state.coupon);
export const getCouponField = state => couponSelectors.getCouponField(state.coupon);

/** order selectors */
export const getOrderItem = (state,id) => orderSelectors.getOrderItem(state.order,id);
export const getOrderItems = (state) => orderSelectors.getOrderItems(state.order);
export const getIsFetchingOrderItems = state => orderSelectors.getIsFetchingOrderItems(state.order);
export const getFecthingOrderItemsError = state => orderSelectors.getFecthingOrderItemsError(state.order);
export const getOrder = state => orderSelectors.getOrder(state.order);
export const getIsPostingOrder = state => orderSelectors.getIsPostingOrder(state.order);
export const getPostingOrderError = state => orderSelectors.getPostingOrderError(state.order);

/** invoice selectors */
export const getInvoiceItem = (state,id) => invoiceSelectors.getInvoiceItem(state.invoice,id);
export const getInvoiceItems = (state) => invoiceSelectors.getInvoiceItems(state.invoice);
export const getIsFetchingInvoiceItems = state => invoiceSelectors.getIsFetchingInvoiceItems(state.invoice);
export const getFecthingInvoiceItemsError = state => invoiceSelectors.getFecthingInvoiceItemsError(state.invoice);

export const getInvoice = state => invoiceSelectors.getInvoice(state.invoice);
export const getIsPostingInvoice = state => invoiceSelectors.getIsPostingInvoice(state.invoice)
export const getPostingInvoiceError = state => invoiceSelectors.getPostingInvoiceError(state.invoice);

/** payment selectors */
export const getPaymentItem = (state,id) => paymentSelectors.getPaymentItem(state.payment,id);
export const getPaymentItems = (state) => paymentSelectors.getPaymentItems(state.payment);
export const getIsFetchingPaymentItems = state => paymentSelectors.getIsFetchingPaymentItems(state.payment);
export const getFecthingPaymentItemsError = state => paymentSelectors.getFecthingPaymentItemsError(state.payment);

export const getPayment = state => paymentSelectors.getPayment(state.payment);
export const getIsPostingPayment = state => paymentSelectors.getIsPostingPayment(state.payment)
export const getPostingPaymentError = state => paymentSelectors.getPostingPaymentError(state.payment);

