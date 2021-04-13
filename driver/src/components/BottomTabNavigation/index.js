import React from "react"
import {View, StyleSheet, SafeAreaView} from "react-native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import HistoryScreen from "./Screens/History"
import HomeScreen from "./Screens/Qrcode/Home"
import DeliveryScreen from "./Screens/Delivery/Delivery"

const Tab = createBottomTabNavigator()

function BottomTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Qrcode"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#1CC900",
        headerTintColor: "#1CC900",
        initialRouteName: "Qrcode",
      }}>
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarLabel: "History",
          headerTitle: "Lịch sử giao hàng",
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="history" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Qrcode"
        component={HomeScreen}
        options={{
          tabBarLabel: "Qrcode",
          headerTitle: "Danh sách đơn hàng",
          tabBarIcon: ({color, size}) => (
            <View style={styles.boxButtonIcon}>
              <FontAwesome name="qrcode" color={"white"} size={size} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Delivery"
        component={DeliveryScreen}
        options={{
          tabBarLabel: "Delivery",
          headerTitle: "Giao hàng cho khách",
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="money" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  boxButtonIcon: {
    height: 44,
    width: 44,
    backgroundColor: "#1CC900",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 22
  },
})

export default BottomTabNavigation
