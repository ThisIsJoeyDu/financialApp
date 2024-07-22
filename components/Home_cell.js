import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export function Home_cell(title, amount) {
    return (
        <View style={styles.cell}>
            <Text>{title}</Text>
            <Text>{amount}</Text>
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
    cell: {

    }
  });