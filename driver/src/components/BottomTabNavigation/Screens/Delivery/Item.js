import React from "react"
import {
  View,
  Text,
  StyleSheet,
  PixelRatio,
  TouchableOpacity,
} from "react-native"

const FONTSIZE_ID_LABEL = 26 / PixelRatio.getFontScale()

function Item({data, navigation}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("DeliveryDetailScreen")}
      style={styles.container}>
      <Text style={styles.id}>{data.id}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: "5%",
    backgroundColor: "#1CC900",
    minHeight: 100,
    padding: 10,
  },
  id: {
    fontSize: FONTSIZE_ID_LABEL,
  },
})

export default Item
