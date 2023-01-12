import React, { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle, FlatList } from "react-native"
import { Text } from "../components"
import { colors } from "../theme"

const transactions = [
  { id: 1, name: `"Golub" Taxi Transportation`, date: "20th May, 18:39", value: -345, coin: "EUR" },
  { id: 2, name: `"Golub" Taxi Transportation`, date: "20th May, 18:39", value: -345, coin: "EUR" },
  { id: 3, name: `"Golub" Taxi Transportation`, date: "20th May, 18:39", value: -345, coin: "EUR" },
  { id: 4, name: `"Golub" Taxi Transportation`, date: "20th May, 18:39", value: -345, coin: "EUR" },
  { id: 5, name: `"Golub" Taxi Transportation`, date: "20th May, 18:39", value: -345, coin: "EUR" },
]

export const DarkTransactionsCard = () => {
  return (
    <View style={$currentCard}>
      <View style={$transactionsHeader}>
        <Text style={$transactionsTitle} tx="welcomeScreen.transactionTitle"></Text>
        <View style={$iconContainer}>
          <Image
            style={$transactionMenuIcon}
            source={require("../../assets/images/transactionsMenuIcon.png")}
          />
        </View>
      </View>

      <FlatList
        data={transactions}
        renderItem={({ item }) => (
          <View>
            <View style={$transactioItem}>
              <Image
                style={$transactionIcon}
                source={require("../../assets/images/taxilogo.png")}
              />
              <View style={$transactioInfo}>
                <Text style={$transactionDescription}>{item.name}</Text>
                <Text style={$transactionDate}>{item.date}</Text>
              </View>
              <View>
                <Text style={$transactionValue}>{item.value.toFixed(2)}</Text>
                <Text style={$transactionCoin}>{item.coin}</Text>
              </View>
            </View>
            <View style={item.id !== transactions.length && $separator}></View>
          </View>
        )}
      />
    </View>
  )
}
const $separator: ViewStyle = {
  borderBottomWidth: 1,
  borderBottomColor: colors.darkText,
  marginLeft: 60,
  marginRight: 12,
}

const $currentCard: ViewStyle = {
  backgroundColor: colors.grey,
  margin: 12,
  padding: 15,
  borderRadius: 15,
}

const $iconContainer: ViewStyle = {
  backgroundColor: colors.background,
  height: 30,
  width: 30,
  borderRadius: 15,
  flexDirection: "row",
  justifyContent: "center",
  marginRight: 12,
}

const $transactionsHeader: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
}

const $transactionMenuIcon: ImageStyle = {
  width: 15,
  height: 10,
  marginTop: 10,
}

const $transactionsTitle: TextStyle = {
  color: colors.white,
  fontSize: 17,
  fontFamily: "monBold",
  paddingBottom: 8,
  marginLeft: 8,
  marginTop: 5,
}

const $transactionDescription: TextStyle = {
  color: colors.white,
  fontSize: 12,
  fontFamily: "monBold",
}

const $transactionDate: TextStyle = {
  color: colors.darkText,
  fontSize: 11,
  fontFamily: "monSbold",
  marginTop: -10,
}

const $transactionValue: TextStyle = {
  color: colors.darkRed,
  fontSize: 12,
  fontFamily: "monBold",
  marginLeft: -22,
}

const $transactionCoin: TextStyle = {
  color: colors.darkText,
  fontSize: 11,
  fontFamily: "monBold",
  marginTop: -10,
}

const $transactioInfo: ViewStyle = {
  marginLeft: -55,
}

const $transactioItem: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  padding: 8,
}

const $transactionIcon: ImageStyle = {
  width: 30,
  height: 30,
  padding: 10,
  borderRadius: 8,
  marginTop: 4,
}