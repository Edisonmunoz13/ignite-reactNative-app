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
import { ScrollView } from "react-native-gesture-handler"
import { Headline } from "../components/Headline"
import { NavigationBar } from "../components/NavigationBar"
import { SliderAccounts } from "../components/SliderAccounts"
import { TransactionsCard } from "../components/TransactionsCard"
import { colors, spacing } from "../theme"

export const LigthScreen = ({ onPress }) => {
  return (
    <View style={$container}>
      <ScrollView>
        <TouchableOpacity onPress={onPress}>
          <Headline />
        </TouchableOpacity>
        <View>
          <SliderAccounts />
        </View>
        <View style={$transactionsContainer}>
          <TransactionsCard />
        </View>
      </ScrollView>
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
