import React, { useEffect } from "react"
import { View, ViewStyle, useColorScheme } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { Headline } from "../components/Headline"
import { HistoryAccountHeadline } from "../components/HistoryAccountHeadline"
import { NavigationBar } from "../components/NavigationBar"
import { SliderAccounts } from "../components/SliderAccounts"
import { TransactionsCard } from "../components/TransactionsCard"
import { colors } from "../theme"

export const HistoryAccount = () => {
  const theme = useColorScheme()

  useEffect(() => {
    console.log(theme)
  }, [theme])

  return (
    <View style={[$container, { backgroundColor: colors[theme].background }]}>
      <ScrollView>
        <Headline>
          <HistoryAccountHeadline />
        </Headline>
        <SliderAccounts />
        <View style={$transactionsContainer}>
          <TransactionsCard />
        </View>
      </ScrollView>
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
}

const $transactionsContainer: ViewStyle = {
  marginTop: -12,
}
