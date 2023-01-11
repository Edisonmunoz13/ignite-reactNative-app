import React, { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle, FlatList } from "react-native"
import { Text } from "../components"

const transactions = [
  { name: `"Golub" Taxi Transportation`, date: "20th May, 18:39", value: -345, coin: "EUR" },
  { name: `"Golub" Taxi Transportation`, date: "20th May, 18:39", value: -345, coin: "EUR" },
  { name: `"Golub" Taxi Transportation`, date: "20th May, 18:39", value: -345, coin: "EUR" },
  { name: `"Golub" Taxi Transportation`, date: "20th May, 18:39", value: -345, coin: "EUR" },
  { name: `"Golub" Taxi Transportation`, date: "20th May, 18:39", value: -345, coin: "EUR" },
]

export const TransactionsCard = () => {
  return (
    <View style={$currentCard}>
      <Text style={$current}>Recent Transactions</Text>

      <FlatList
        data={transactions}
        renderItem={({ item }) => (
          <View style={$transactioItem}>
            <Image style={$transactionIcon} source={require("../../assets/images/taxilogo.png")} />
            <View style={{ borderBottomColor: "#DCDCDC" }}>
              <Text style={$transactionDescription}>{item.name}</Text>
              <Text>{item.date}</Text>
            </View>
            <View>
              <Text>{item.value}</Text>
              <Text>{item.coin}</Text>
            </View>
          </View>
        )}
      />
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
  fontSize: 17,
  fontWeight: "bold",
}

const $transactionDescription: TextStyle = {
  color: "#16110D",
  fontSize: 12,
  fontWeight: "bold",
}

const $transactioItem: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
}

const $transactionIcon: ImageStyle = {
  width: 30,
  height: 30,
  padding: 10,
  borderRadius: 8,
  marginTop: 12,
}
