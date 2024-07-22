import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { DataContext } from './MyDataContext';

export function Home( {navigation} ) {
  const {transactions} = React.useContext(DataContext);

  return (
    <View style={styles.container}>
      <FlatList
        style={{width: '100%'}}
        data={transactions}
        renderItem={ ({item}) => (
          <TouchableOpacity onPress={
            () => {
              navigation.navigate('TransactionDetail', { transaction: item })
            }
          }>
            <View style={styles.item}>
              <Text style={styles.title}>{item.key}</Text>
              <View style={styles.right}>
                <Text style={styles.amount}>{item.amount}</Text>
                <Icon name="chevron-forward-outline" size={20} color="gray" />
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
  },
  amount: {
    fontSize: 18,
    color: '#0000FF',
  }
});