import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function TransactionDetailScreen({ route }) {
    const { transaction } = route.params;
    return (
      <View style={styles.container}>
        <View style={styles.top}>
            <Text style={styles.amount}>{transaction.amount}</Text>
            <Text style={styles.shop}>{transaction.key}</Text>
            <Text style={styles.address}>{transaction.address}</Text>
        </View>
        <View style={styles.bottom}>
            <Text style={styles.dateLeft}>Transaction Date</Text>
            <Text style={styles.date}>{transaction.date}</Text>
        </View>
      </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
    top: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4F8BBA',
        height: '10%',
        width: '100%',
    },
    amount: {
        fontSize: 40,
        color: 'white',
    },
    shop: {
        fontSize: 20,
        color: 'white',
    },
    address: {
        fontSize: 15,
        color: 'white',
    },
    bottom: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        width: '100%',
    }
  });