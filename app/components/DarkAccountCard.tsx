import React, { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle, FlatList } from "react-native"
import { Text } from "../components"
import { colors } from "../theme"

const coins = [
  { name: "EUR", backgroundColor: "#523CF8", color: "#fff" },
  { name: "USD", backgroundColor: "#2F2E33", color: "#646464" },
  { name: "GBP", backgroundColor: "#2F2E33", color: "#646464" },
]

export const DarkAccountCard = () => {
  return (
    <View style={$currentCard}>
      <View style={$currentAccountHeader}>
        <View>
          <Text tx="welcomeScreen.CurrentAccount" style={$current}></Text>
          <Text style={$account} tx="welcomeScreen.account"></Text>
        </View>
        <View style={$menuButtonContainer}>
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
      <Text style={$balance} tx="welcomeScreen.balanceValue"></Text>
      <Text style={$balanceDescription} tx="welcomeScreen.balanceDescription"></Text>
    </View>
  )
}

const $currentCard: ViewStyle = {
  backgroundColor: colors.grey,
  margin: 12,
  padding: 15,
  borderRadius: 15,
  width: 350,
}

const $currentAccountHeader: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
}

const $menuButtonContainer: ViewStyle = {
  height: 40,
  width: 40,
  backgroundColor: colors.icons,
  alignItems: "center",
  paddingTop: 18,
  borderRadius: 20,
}

const $menuButton: ImageStyle = {
  width: 18,
  height: 4,
}

const $current: TextStyle = {
  color: colors.white,
  fontSize: 22,
  fontFamily: "monBold",
  marginTop: -4,
}
const $account: TextStyle = {
  color: colors.darkText,
  fontSize: 12,
  marginBottom: 10,
  fontFamily: "monBold",
}

const $balance: TextStyle = {
  color: colors.white,
  fontSize: 34,
  paddingTop: 25,
  fontFamily: "monBold",
}
const $balanceDescription: TextStyle = {
  color: colors.white,
  fontSize: 15,
  fontFamily: "monReg",
  marginTop: -5,
  marginBottom: -4,
}