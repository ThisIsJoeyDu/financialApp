import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DataContext } from './MyDataContext';

export function Summary() {
    const { transactions } = React.useContext(DataContext);
    const totalTransactions = transactions.length;
    const totalBalance = transactions.reduce((acc, item) => acc + parseFloat(item.amount.replace('$', '')), 0).toFixed(2);
    const highestTransaction = transactions.reduce((maxItem, currentItem) => {
        const currentAmount = parseFloat(currentItem.amount.replace('$', ''));
        const maxAmount = parseFloat(maxItem.amount.replace('$', ''));
        return currentAmount > maxAmount ? currentItem : maxItem;
      }, transactions[0]);
      const lowestTransaction = transactions.reduce((minItem, currentItem) => {
        const currentAmount = parseFloat(currentItem.amount.replace('$', ''));
        const minAmount = parseFloat(minItem.amount.replace('$', ''));
        return currentAmount < minAmount ? currentItem : minItem;
      }, transactions[0]);

    return (
    <View style={styles.container}>
        <View style={styles.single}>
            <Text style={styles.title}>Transactions</Text>
            <Text style={styles.amount}>{totalTransactions}</Text>
        </View>
        <View style={styles.single}>
            <Text style={styles.title}>Nike</Text>
            <Text style={styles.amount}>${totalBalance}</Text>
        </View>
        <View style={styles.double}>
            <Text style={styles.doubleTitle}>High Spending</Text>
            <View style={styles.subContainer}>
                <Text style={styles.name}>{highestTransaction.key}</Text>
                <Text style={styles.amount}>{highestTransaction.amount}</Text>
            </View>
        </View>
        <View style={styles.double}>
            <Text style={styles.doubleTitle}>Low Spending</Text>
            <View style={styles.subContainer}>
                <Text style={styles.name}>{lowestTransaction.key}</Text>
                <Text style={styles.amount}>{lowestTransaction.amount}</Text>
            </View>
        </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  auto: { 
    flex: 1, 
    backgroundColor: 'black', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  single: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#4F8BBA',
    width: '100%',
  },
  title: {
    fontSize: 20,
  },
  doubleTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#4F8BBA',
  },
  amount: {
    color: 'gray',
  },
  double: {
    padding: 10,
    borderBottomColor: '#4F8BBA',
    borderBottomWidth: 1,
    width: '100%',
  },
  subContainer:{
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});