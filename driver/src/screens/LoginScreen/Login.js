import React from "react"
import {View, Text, StyleSheet, PixelRatio} from "react-native"
import Form from "../../components/Form"
import {ListInput} from "./ListInput"

const FONTSIZE_TITLE_SCREEN = 25 / PixelRatio.getFontScale()
const FONTSIZE_GET_PASSWORD = 18 / PixelRatio.getFontScale()
const FONTSIZE_LABEL = 16 / PixelRatio.getFontScale()

function Login({navigation}) {
  const onSubmit = data => {
    navigation.navigate("BottomTabNavigationScreen")
    console.log(data)
  }
  const _getPassword = () => {
    return <Text style={styles.getPassword}>Quên mật khẩu ?</Text>
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleScreen}>Đăng nhập tài khoản</Text>
      <Form
        listInput={ListInput}
        onSubmit={onSubmit}
        labelSubmit="Đăng nhập"
        styleButtonSubmit={{width: "50%", alignSelf: "center"}}
        footer={_getPassword()}
      />
      <Text style={styles.or}>Hoặc</Text>
      <View style={styles.boxLabel}>
        <Text style={styles.registerLabel}>Tạo tài khoản của bạn? </Text>
        <Text
          onPress={() => navigation.navigate("RegisterScreen")}
          style={styles.registerLabel}>
          Đăng ký
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
  getPassword: {
    textAlign: "right",
    marginBottom: 20,
    fontSize: FONTSIZE_GET_PASSWORD,
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

export default Login
