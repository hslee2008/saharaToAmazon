import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Stack = createNativeStackNavigator()

import Home from './app/pages/Home'
import Input from './app/pages/Input'
import Output from './app/pages/Output'

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar hidden={true} />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen name="CFP 입력" component={Input} />
          <Stack.Screen name="나의 세계" component={Output} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
