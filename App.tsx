import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import HoroscopoScreen from './src/screens/HoroscopoScreen';
import TarotScreen from './src/screens/TarotScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#0d0d1a',
            borderTopColor: '#1a1a2e',
            borderTopWidth: 1,
            paddingBottom: 8,
            paddingTop: 6,
            height: 62,
          },
          tabBarActiveTintColor: '#FFD700',
          tabBarInactiveTintColor: '#555',
          tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
        }}
      >
        <Tab.Screen
          name="Horóscopo"
          component={HoroscopoScreen}
          options={{
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 22, color }}>⭐</Text>,
          }}
        />
        <Tab.Screen
          name="Tarot"
          component={TarotScreen}
          options={{
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 22, color }}>🔮</Text>,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
