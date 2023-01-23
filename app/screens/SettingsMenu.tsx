import React, { useEffect } from "react"
import { View, ViewStyle, useColorScheme } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { NavigationBar } from "../components/NavigationBar"
import { colors } from "../theme"
import { SettingsHeadline } from "../components/SettingsHeadline"
import { Headline } from "../components/Headline"

export const SettingsMenu = () => {
  const theme = useColorScheme()

  useEffect(() => {
    console.log(theme)
  }, [theme])

  return (
    <View style={[$container, { backgroundColor: colors[theme].background }]}>
      <ScrollView>
        <Headline>
          <SettingsHeadline />
        </Headline>
      </ScrollView>
      <NavigationBar />
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
}
