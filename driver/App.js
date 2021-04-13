import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import {ROUTER} from "./Router"

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {ROUTER.map(router => {
          return (
            <Stack.Screen
              key={router.key}
              name={router.name}
              component={router.component}
              options={router.options}
            />
          )
        })}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
