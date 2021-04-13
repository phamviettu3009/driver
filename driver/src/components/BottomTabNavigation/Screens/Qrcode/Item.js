import React from "react"
import {View, Text, StyleSheet, PixelRatio} from "react-native"

const FONTSIZE_ID_LABEL = 26 / PixelRatio.getFontScale()
const FONTSIZE_STATE_LABEL = 22 / PixelRatio.getFontScale()

function ItemList({data}) {
  return (
    <View style={[styles.container, !data.state && {opacity: 0.2}]}>
      <Text style={styles.id}>{data.id}</Text>
      <View style={styles.boxState}>
        <Text style={styles.labalState}>
          {(data.state && "Đã quét") || "Chưa quét"}
        </Text>
      </View>
    </View>
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
  labalState: {
    fontSize: FONTSIZE_STATE_LABEL,
  },
  boxState: {
    minWidth: "40%",
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5,
    alignSelf: "flex-end",
    marginTop: 10,
    alignItems: "center",
  },
})

export default ItemList
