import React, { useEffect } from "react"
import { View, ViewStyle, useColorScheme } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { Headline } from "../components/Headline"
import { NavigationBar } from "../components/NavigationBar"
import { PaymentsHeadline } from "../components/PaymentsHeadline"
import { colors } from "../theme"

export const Payments = () => {
  const theme = useColorScheme()

  useEffect(() => {
    console.log(theme)
  }, [theme])

  return (
    <View style={[$container, { backgroundColor: colors[theme].background }]}>
      <ScrollView>
        <Headline>
          <PaymentsHeadline />
        </Headline>
      </ScrollView>
      <NavigationBar />
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
}
