import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import moment from 'moment';

import { Block, Text, Button, Input, Icon, theme } from '../../components/UIComponents';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BASE_SIZE = theme.SIZES.BASE;
const COLOR_WHITE = theme.COLORS.WHITE;
const COLOR_INFO = theme.COLORS.INFO


const OrderItemPreview = ({ item, index }) => {
  //const gradientColors = index % 2 ? GRADIENT_BLUE : GRADIENT_PINK;
  return (
    <Block row center card shadow space="between" style={styles.card} key={item.id}>
      <Block
        // start={[0.45, 0.45]}
        // end={[0.90, 0.90]}
        // colors={gradientColors}
        style={[styles.gradient, styles.left]}
      >
        <MaterialCommunityIcons
          size={BASE_SIZE*1.125}
          name={"package-variant-closed"}
          color={COLOR_INFO}
        />
      </Block>

      <Block flex>
        <Text size={BASE_SIZE * 1.125}>{`Order number: ${item.id}`}</Text>
        <Text size={BASE_SIZE * 0.875} muted>{`Delivery Address: ${item.delivery_address}`}</Text>
        <Text size={BASE_SIZE * 0.875} muted>{`Details: ${item.details}`}</Text>
        <Text size={BASE_SIZE * 0.875} muted>{`Order Date: ${moment(item.order_date).format("DD MM YYYY hh:mm:ss")}`}</Text>
        <Text size={BASE_SIZE * 0.875} muted>{`Delivered to: ${item.delivery_name}`}</Text>
        <Text size={BASE_SIZE * 0.875}>{`Total: Q.${item.total}`}</Text>
      </Block>
      <Button style={styles.right}>
        
        <MaterialCommunityIcons size={BASE_SIZE*1.125} name={item.status === 0 ? "truck-delivery" : "truck-check"} color={COLOR_INFO} />
      </Button>
    </Block>
  );
}


const styles = StyleSheet.create({
card: {
  borderColor: 'transparent',
  marginHorizontal: BASE_SIZE,
  marginVertical: BASE_SIZE / 2,
  padding: BASE_SIZE,
  backgroundColor: COLOR_WHITE,
  shadowOpacity: 0.40,
},
menu: {
  width: BASE_SIZE * 2,
  borderColor: 'transparent',
},
settings: {
  width: BASE_SIZE * 2,
  borderColor: 'transparent',
},
left: {
  marginRight: BASE_SIZE,
},
right: {
  width: BASE_SIZE * 2,
  backgroundColor: 'transparent',
  elevation: 0,
},
gradient: {
  width: BASE_SIZE * 3.25,
  height: BASE_SIZE * 3.25,
  borderRadius: BASE_SIZE * 3.25,
  alignItems: 'center',
  justifyContent: 'center',
},
});


export default OrderItemPreview;
