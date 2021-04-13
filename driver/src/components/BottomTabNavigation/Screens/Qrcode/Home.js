import React from "react"
import {View, Text, StyleSheet, FlatList} from "react-native"
import Item from "./Item"

const data = [
  {
    id: 1,
    state: true,
  },
  {
    id: 2,
    state: false,
  },
  {
    id: 3,
    state: false,
  },
  {
    id: 4,
    state: false,
  },
]

function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
        data={data}
        renderItem={({item}) => <Item data={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5%"
  },
})

export default HomeScreen
