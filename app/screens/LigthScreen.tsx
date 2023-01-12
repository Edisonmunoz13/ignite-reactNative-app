import { observer } from "mobx-react-lite"
import React, { FC, useState } from "react"
import {
  Image,
  ImageStyle,
  TextStyle,
  View,
  ViewStyle,
  FlatList,
  TouchableOpacity,
} from "react-native"
import { Headline } from "../components/Headline"
import { NavigationBar } from "../components/NavigationBar"
import { SliderAccounts } from "../components/SliderAccounts"
import { TransactionsCard } from "../components/TransactionsCard"
import { colors, spacing } from "../theme"

export const LigthScreen = ({ onPress }) => {
  return (
    <View style={$container}>
      <TouchableOpacity onPress={onPress}>
        <Headline />
      </TouchableOpacity>
      <View>
        <SliderAccounts />
      </View>
      <View style={$transactionsContainer}>
        <TransactionsCard />
      </View>
      <NavigationBar />
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}

const $transactionsContainer: ViewStyle = {
  marginTop: -12,
}
