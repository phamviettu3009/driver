import LoginScreen from "./src/screens/LoginScreen/Login"
import RegisterScreen from "./src/screens/RegisterScreen/Register"
import BottomTabNavigation from "./src/components/BottomTabNavigation"
import DeliveryDetailScreen from "./src/screens/DeliveryDetailScreen/DeliveryDetail"
import SuccsessDeliveryScreen from "./src/screens/successDeliverySceen/successDelivery"

export const ROUTER = [
  {
    key: 1,
    name: "LoginScreen",
    component: LoginScreen,
    options: { title: "Đăng nhập", headerLeft: false },
  },
  {
    key: 2,
    name: "RegisterScreen",
    component: RegisterScreen,
    options: { title: "Đăng ký", headerLeft: false },
  },
  {
    key: 3,
    name: "BottomTabNavigationScreen",
    component: BottomTabNavigation,
  },
  {
    key: 4,
    name: "DeliveryDetailScreen",
    component: DeliveryDetailScreen
  },
  {
    key: 5,
    name: "SuccsessDeliveryScreen",
    component: SuccsessDeliveryScreen,
  }
]