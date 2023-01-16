import React, { FC } from "react"
import {
  Image,
  ImageStyle,
  TextStyle,
  View,
  ViewStyle,
  FlatList,
  useColorScheme,
} from "react-native"
import { Text } from "../components"
import { colors } from "../theme"

const coins = [
  { name: "EUR", backgroundColor: "#523CF8", color: "#fff" },
  { name: "USD", backgroundColor: "#fff", color: "#16110D" },
  { name: "GBP", backgroundColor: "#fff", color: "#16110D" },
]

export const AccountCard = () => {
  const theme = useColorScheme()
  return (
    <View style={[$currentCard, { backgroundColor: colors[theme].cards }]}>
      <View style={$currentAccountHeader}>
        <View>
          <Text
            tx="welcomeScreen.CurrentAccount"
            style={[$current, { color: colors[theme].text }]}
          ></Text>
          <Text style={[$account, { color: colors[theme].text }]} tx="welcomeScreen.account"></Text>
        </View>
        <View
          style={[$menuButtonContainer, { backgroundColor: colors[theme].icons, borderRadius: 20 }]}
        >
          <Image style={$menuButton} source={require("../../assets/images/menuPoints.png")} />
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row" }}>
          {coins.map((item) => (
            <View
              style={{
                width: 45,
                backgroundColor: item.backgroundColor,
                height: 25,
                borderRadius: 8,
                paddingLeft: 10,
                paddingRight: 8,
                marginBottom: 4,
                marginRight: 2,
              }}
            >
              <Text style={{ color: item.color, fontFamily: "monBold", fontSize: 12 }}>
                {item.name}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <Text
        style={[$balance, { color: colors[theme].text }]}
        tx="welcomeScreen.balanceValue"
      ></Text>
      <Text
        style={[$balanceDescription, { color: colors[theme].text }]}
        tx="welcomeScreen.balanceDescription"
      ></Text>
    </View>
  )
}

const $currentCard: ViewStyle = {
  margin: 12,
  padding: 15,
  borderRadius: 15,
  marginRight: 12,
  width: 350,
}

const $currentAccountHeader: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
}

const $menuButtonContainer: ViewStyle = {
  height: 40,
  width: 40,
  alignItems: "center",
  paddingTop: 18,
}

const $menuButton: ImageStyle = {
  width: 18,
  height: 4,
  borderRadius: 20,
}

const $current: TextStyle = {
  fontSize: 22,
  fontFamily: "monBold",
  marginTop: -4,
}
const $account: TextStyle = {
  fontSize: 12,
  marginBottom: 10,
  fontFamily: "monBold",
}

const $balance: TextStyle = {
  fontSize: 34,
  paddingTop: 25,
  fontFamily: "monBold",
}
const $balanceDescription: TextStyle = {
  fontSize: 15,
  fontFamily: "monReg",
  marginTop: -5,
  marginBottom: -4,
}
