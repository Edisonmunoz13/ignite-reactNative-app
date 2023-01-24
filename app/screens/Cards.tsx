import React, { useEffect } from "react"
import { View, ViewStyle, useColorScheme } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { NavigationBar } from "../components/NavigationBar"
import { colors } from "../theme"
import { CardsHeadline } from "../components/CardsHeadline"
import { Headline } from "../components/Headline"
import { SafeAreaView } from "react-native-safe-area-context"

export const Cards = () => {
  const theme = useColorScheme()

  useEffect(() => {
    //console.log(theme)
  }, [theme])

  return (
    <View style={[$container, { backgroundColor: colors[theme].background }]}>
      <ScrollView>
        <Headline>
          <CardsHeadline />
        </Headline>
      </ScrollView>
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
}
