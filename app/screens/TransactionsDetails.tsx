import React, { useEffect } from "react"
import { View, ViewStyle, useColorScheme, Text } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { Headline } from "../components/Headline"
import { TransactionsDetailsHeadline } from "../components/TransactionsDetailsHeadline"
import { colors } from "../theme"

export const TransactionDetails = () => {
  const theme = useColorScheme()

  useEffect(() => {
    //console.log(theme)
  }, [theme])

  return (
    <View style={[$container, { backgroundColor: colors[theme].white }]}>
      <ScrollView>
        <Headline>
          <TransactionsDetailsHeadline />
        </Headline>
      </ScrollView>
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
}
