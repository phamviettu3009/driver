import React from "react"
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native"
import Item from "./Item"

const data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
]

function DeliveryScreen({navigation}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <Item navigation={navigation} data={item} />}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.buttonDelivery}>
        <Text style={styles.buttonLabel}>Giao hàng</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5%",
  },
  buttonDelivery: {
    width: 80,
    height: 80,
    backgroundColor: "#1CC900",
    borderRadius: 50,
    elevation: 3,
    zIndex: 3,
    position: "absolute",
    bottom: 10,
    right: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLabel: {
    color: "white",
  },
})

export default DeliveryScreen
