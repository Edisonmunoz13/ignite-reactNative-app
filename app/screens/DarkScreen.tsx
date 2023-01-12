import React, { FC, useState } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle, FlatList } from "react-native"
import { DarkHeadline } from "../components/DarkHeadline"
import { DarkNavigationBar } from "../components/DarkNavigatorBar"
import { DarkSliderAccounts } from "../components/DarkSliderAccount"
import { DarkTransactionsCard } from "../components/DarkTransactionsCard"
import { colors, spacing } from "../theme"

export const DarkScreen = () => {
  return (
    <View style={$container}>
      <DarkHeadline />
      <View>
        <DarkSliderAccounts />
      </View>
      <View style={$transactionsContainer}>
        <DarkTransactionsCard />
      </View>
      <DarkNavigationBar />
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.text,
}

const $transactionsContainer: ViewStyle = {
  marginTop: -12,
}
