import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import moment from 'moment';
import { AppStyles, AppIcon } from '../../AppStyles';

const PaymentItemPreview = ({ item, index }) => {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.item}>
      <View style={styles.singleRow}>
        <Text
          style={styles.titleText}>{"Payment number: "}</Text>
        <Text
          style={styles.descriptionText}>{item.id}</Text>
      </View>
      <View style={styles.singleRow}>
        <Text
          style={styles.titleText}>{"Invoice reference number: "}</Text>
        <Text
          style={styles.descriptionText}>{item.invoice}</Text>
      </View>
      <View style={styles.singleRow}>
        <Text
          style={styles.titleText}>{"Amount: "}</Text>
        <Text
          style={styles.descriptionText}>{item.amount}</Text>
      </View>
      <View style={styles.singleRow}>
        <Text
          style={styles.titleText}>{"Payment date: "}</Text>
        <Text
          style={styles.descriptionText}>{moment(item.payment_date).format("DD MM YYYY hh:mm:ss")}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: AppStyles.color.white,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1,
    marginLeft: 6,
    marginRight: 6,
    marginBottom: 6,
    marginTop: 6,
    borderRadius: 15
  },
  singleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#0000',
    backgroundColor: AppStyles.color.white,
    marginHorizontal: 6,
    marginVertical: 6,
    justifyContent: 'space-between'
  },
  titleText: {
    fontSize: AppStyles.fontSize.normal,
    color: AppStyles.color.black
  },
  descriptionText: {
    fontSize: AppStyles.fontSize.normal,
    color: AppStyles.color.darkGray,
    fontWeight: "100",
    marginBottom: 4
  },
  icon: {
    paddingTop: 16,
    paddingBottom: 16
  }
})

export default PaymentItemPreview;