import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Summary } from './Summary';
import { TransactionDetailScreen } from './Detail';
import { DataProvider } from './MyDataContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#4F8BBA',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen 
          name="Transactions" 
          component={TransactionStack} 
          options={{ headerShown: false}}
          />
          <Tab.Screen name="Summary" component={Summary} />
        </Tab.Navigator>
      </NavigationContainer>
    </DataProvider>
  ); 
}

function TransactionStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'center',
  },
});
