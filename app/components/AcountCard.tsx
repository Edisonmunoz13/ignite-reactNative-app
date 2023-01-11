import React, { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle, FlatList } from "react-native"
import { Text } from "../components"

const coins = [
  { name: "EUR", backgroundColor: "#523CF8", color: "#fff" },
  { name: "USD", backgroundColor: "#fff", color: "#16110D" },
  { name: "GBP", backgroundColor: "#fff", color: "#16110D" },
]

export const AccountCard = () => {
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
      <FlatList
        horizontal={true}
        data={coins}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: item.backgroundColor,
              height: 25,
              borderRadius: 8,
              paddingLeft: 10,
              paddingRight: 8,
              marginBottom: 4,
            }}
          >
            <Text style={{ color: item.color, fontSize: 12, fontFamily: "monSbold" }}>
              {item.name}
            </Text>
          </View>
        )}
      />
      <Text style={$balance} tx="welcomeScreen.balanceValue"></Text>
      <Text style={$balanceDescription} tx="welcomeScreen.balanceDescription"></Text>
    </View>
  )
}

const $currentCard: ViewStyle = {
  backgroundColor: "#FEFEFE",
  margin: 12,
  padding: 15,
  borderRadius: 15,
}

const $currentAccountHeader: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
}

const $menuButtonContainer: ViewStyle = {
  height: 40,
  width: 40,
  backgroundColor: "#F76654",
  alignItems: "center",
  paddingTop: 18,
  borderRadius: 20,
}

const $menuButton: ImageStyle = {
  width: 18,
  height: 4,
}

const $current: TextStyle = {
  color: "#16110D",
  fontSize: 22,
  fontFamily: "monBold",
  marginTop: -4,
}
const $account: TextStyle = {
  color: "#16110D",
  fontSize: 12,
  marginBottom: 10,
  fontFamily: "monBold",
}

const $balance: TextStyle = {
  color: "#16110D",
  fontSize: 34,
  paddingTop: 25,
  fontFamily: "monBold",
}
const $balanceDescription: TextStyle = {
  color: "#16110D",
  fontSize: 15,
  fontFamily: "monReg",
  marginTop: -5,
  marginBottom: -4,
}
