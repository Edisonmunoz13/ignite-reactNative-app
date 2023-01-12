import React, { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle, FlatList } from "react-native"
import { Text } from "../components"
import { colors } from "../theme"
import data from "../data/transactionsData"

const transactionsData = data

export const TransactionsCard = () => {
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
        data={transactionsData}
        renderItem={({ item }) => (
          <View key={item.id}>
            <View style={$transactioItem}>
              <View
                style={{
                  width: 30,
                  height: 30,
                  flexDirection: "row",
                  justifyContent: "center",
                  backgroundColor: colors.icons,
                  borderRadius: 8,
                  marginTop: 5,
                }}
              >
                <Image style={$transactionIcon} source={item.icon} />
              </View>
              <View style={$transactioInfo}>
                <Text style={$transactionDescription}>{item.title}</Text>
                <Text style={$transactionDate}>{item.date}</Text>
              </View>
              <View style={{ alignItems: "flex-end", width: 70 }}>
                <Text
                  style={{
                    color: item.type ? "#523CF8" : "#F76654",
                    fontSize: 12,
                    fontFamily: "monBold",
                  }}
                >
                  {item.amount}
                </Text>
                <Text style={$transactionCoin}>{item.currency}</Text>
              </View>
            </View>
            <View style={item.id !== transactionsData.length && $separator}></View>
          </View>
        )}
      />
    </View>
  )
}
const $separator: ViewStyle = {
  borderBottomWidth: 1,
  borderBottomColor: colors.separator,
  marginLeft: 60,
  marginRight: 12,
}

const $currentCard: ViewStyle = {
  backgroundColor: colors.cards,
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
  color: colors.text,
  fontSize: 17,
  fontFamily: "monBold",
  paddingBottom: 8,
  marginLeft: 8,
  marginTop: 5,
}

const $transactionDescription: TextStyle = {
  color: colors.text,
  fontSize: 12,
  fontFamily: "monBold",
}

const $transactionDate: TextStyle = {
  color: colors.text2,
  fontSize: 11,
  fontFamily: "monSbold",
  marginTop: -10,
}

const $transactionCoin: TextStyle = {
  color: colors.text2,
  fontSize: 11,
  fontFamily: "monBold",

  marginTop: -10,
}

const $transactioInfo: ViewStyle = {
  width: 180,
  alignItems: "flex-start",
  marginRight: 12,
}

const $transactioItem: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  padding: 8,
}

const $transactionIcon: ImageStyle = {
  width: 16,
  height: 15,
  marginTop: 7.5,
  backgroundColor: colors.icons,
}
