import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert
} from 'react-native';
import {connect} from 'react-redux';
import uuid from 'react-native-uuid';

import * as actions from '../../redux/cart/cart.actions';
import * as selectors from '../../redux/root-reducer';
const HOST_BASE_URL = "https://azenstore.herokuapp.com"

const ProductPreview = ({ item, cartItem, cartId, addCartItem, updateCartItem }) => {
  const addToCart = () => {
    if(cartItem){
      updateCartItem({...cartItem, quantity: cartItem.quantity+1});
    } else {
      const newCartItem = {
        cart: cartId,
        product: item.id,
        quantity: 1
      };
      console.log(newCartItem)
      addCartItem(newCartItem);
    }
  }

	return (
		<View style={styles.card}>
      <Text style={styles.title}>{item.name}</Text>
			<Text style={styles.price}>Q{item.price}</Text>

			<Image style={styles.cardImage} source={{ uri: `${HOST_BASE_URL}${item.featured_image}` }} />

			<View style={styles.cardFooter}>
				<View style={styles.socialBarContainer}>
					<View style={styles.socialBarSection}>
						<TouchableOpacity style={styles.socialBarButton} onPress={() => console.log('funcion de calificar')}>
							<Image style={styles.icon} source={{ uri: 'https://www.shareicon.net/data/512x512/2016/09/10/828167_cart_512x512.png' }} />
							<Text style={[styles.socialBarLabel, styles.buyNow]} onPress={() => addToCart()}>Add to Cart</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.socialBarSection}>
						<TouchableOpacity style={styles.socialBarButton}>
							<Image style={styles.icon} source={{ uri: 'https://www.shareicon.net/data/256x256/2015/08/19/87491_heart_512x512.png' }} />
							<Text style={styles.socialBarLabel}>25</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"white",
    flexBasis: '47%',
    marginHorizontal: 5,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title:{
    fontSize:18,
    flex:1,
  },
  price:{
    fontSize:16,
    color: "green",
    marginTop: 5
  },
  buyNow:{
    color: "purple",
  },
  icon: {
    width:25,
    height:25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default connect(
  (state, {item}) => ({
    cartItem: selectors.getCartItemByProductId(state,item.id),
    cartId: selectors.getCart(state).id,
  }),
  dispatch => ({
    updateCartItem(cartItem){
      dispatch(actions.startUpdatingCartItem(cartItem))
    },
    addCartItem(newCartItem){
      dispatch(
        actions.startAddingCartItem({
          id: uuid.v4(),
          ...newCartItem
        })
      );
    },
  }),

)(ProductPreview);