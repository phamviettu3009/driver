import React from "react"
import {View, Text, StyleSheet, PixelRatio} from "react-native"
import {ListInput} from "./ListInput"
import Form from "../../components/Form"

const FONTSIZE_TITLE_SCREEN = 25 / PixelRatio.getFontScale()
const FONTSIZE_LABEL = 16 / PixelRatio.getFontScale()

function Register({navigation}) {
  const _onSubmit = data => {
    console.log(data)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleScreen}>Tạo tài khoản</Text>
      <Form
        listInput={ListInput}
        onSubmit={_onSubmit}
        labelSubmit="Đăng ký"
        styleButtonSubmit={{width: "50%", alignSelf: "center"}}
      />
      <Text style={styles.or}>Hoặc</Text>
      <View style={styles.boxLabel}>
        <Text style={styles.registerLabel}>Đã có tài khoản của bạn? </Text>
        <Text
          onPress={() => navigation.navigate("LoginScreen")}
          style={styles.registerLabel}>
          Đăng nhập
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  titleScreen: {
    color: "#1CC900",
    marginVertical: 40,
    fontSize: FONTSIZE_TITLE_SCREEN,
  },
  or: {
    fontSize: FONTSIZE_LABEL,
    marginVertical: 20,
  },
  registerLabel: {
    fontSize: FONTSIZE_LABEL,
  },
  boxLabel: {
    flexDirection: "row",
  },
})

export default Register
