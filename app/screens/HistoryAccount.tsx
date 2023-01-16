import { observer } from "mobx-react-lite"
import React, { FC, useEffect, useState } from "react"
import { View, ViewStyle, useColorScheme, TouchableOpacity } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { Headline } from "../components/Headline"
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
        <TouchableOpacity>
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
}

const $transactionsContainer: ViewStyle = {
  marginTop: -12,
}
