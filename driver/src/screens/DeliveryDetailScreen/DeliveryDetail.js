import React from "react"
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  PixelRatio,
  TouchableOpacity,
} from "react-native"

const FONTSIZE_LABEL = 20 / PixelRatio.getFontScale()
const FONTSIZE_LABEL_2 = 24 / PixelRatio.getFontScale()

function DeliveryDetailScreen({navigation}) {
  const nameClient = "Nguyen An"
  const numberClient = "0946841587"

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.label}>{`Tên khách hàng: ${nameClient}`}</Text>
        <Text style={styles.label}>{`Số điện thoại: ${numberClient}`}</Text>
        <View style={styles.box}>
          <Text style={styles.label2}>Tiền thu</Text>
          <View style={styles.box2}>
            <Text style={styles.label}>3.000.000 VNĐ</Text>
          </View>
        </View>
        <View style={styles.box}>
          <Text style={styles.label2}>COD</Text>
          <View style={styles.box2}>
            <Text style={styles.label}>500.000 VNĐ</Text>
          </View>
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate("SuccsessDeliveryScreen")} style={styles.button}>
          <Text
            style={[
              styles.label,
              {color: "white", textTransform: "uppercase", marginBottom: 0},
            ]}>
            Xác nhận giao
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor: "red"}]}>
          <Text
            style={[
              styles.label,
              {color: "white", textTransform: "uppercase", marginBottom: 0},
            ]}>
            Khách trả lại
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: FONTSIZE_LABEL,
    marginBottom: 5,
  },
  box: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-between",
    alignItems: "center",
  },
  box2: {
    minWidth: "50%",
    padding: 5,
    backgroundColor: "#E8E8E8",
    justifyContent: "center",
    alignItems: "center",
  },
  label2: {
    fontSize: FONTSIZE_LABEL_2,
    fontWeight: "600",
  },
  button: {
    width: "100%",
    backgroundColor: "#1CC900",
    borderRadius: 10,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
})

export default DeliveryDetailScreen
