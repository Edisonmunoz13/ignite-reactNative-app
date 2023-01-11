import React, { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle, FlatList } from "react-native"
import { Text } from "../components"
import { customFontsToLoad } from "../theme"

const coins = [
  { name: "EUR", backgroundColor: "#523CF8", color: "#fff" },
  { name: "USD", backgroundColor: "#fff", color: "#16110D" },
  { name: "GBP", backgroundColor: "#fff", color: "#16110D" },
]

export const AccountCard = () => {
  return (
    <View style={$currentCard}>
      <Text tx="welcomeScreen.CurrentAccount" style={$current}></Text>
      <Text style={$account}>1234-4567-3456-3456</Text>
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
            }}
          >
            <Text style={{ color: item.color, fontSize: 12, fontFamily: "monSbold" }}>
              {item.name}
            </Text>
          </View>
        )}
      />
      <Text style={$balance}>76.451,00</Text>
      <Text style={$balanceDescription}>Current balance</Text>
    </View>
  )
}

const $currentCard: ViewStyle = {
  backgroundColor: "#FEFEFE",
  margin: 12,
  padding: 15,
  borderRadius: 15,
}

const $current: TextStyle = {
  color: "#16110D",
  fontSize: 22,
  fontFamily: "monBold",
}
const $account: TextStyle = {
  color: "#16110D",
  fontSize: 12,
  fontWeight: "bold",
  marginBottom: 10,
}

const $balance: TextStyle = {
  color: "#16110D",
  fontSize: 34,
  paddingTop: 30,
  fontFamily: "monBold",
}
const $balanceDescription: TextStyle = {
  color: "#16110D",
  fontSize: 15,
}
