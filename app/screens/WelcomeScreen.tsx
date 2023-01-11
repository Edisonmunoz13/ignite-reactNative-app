import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle, FlatList } from "react-native"
import { Text } from "../components"
import { AccountCard } from "../components/AcountCard"
import { Headline } from "../components/Headline"
import { TransactionsCard } from "../components/TransactionsCard"
import { colors, spacing } from "../theme"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"

export const WelcomeScreen: FC = observer(function WelcomeScreen() {
  return (
    <View style={$container}>
      <Headline />
      <AccountCard />
      <View style={$transactionsContainer}>
        <TransactionsCard />
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}

const $transactionsContainer: ViewStyle = {
  marginTop: -12,
}
