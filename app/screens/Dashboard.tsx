import React, { useEffect } from "react"
import { View, ViewStyle, useColorScheme } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { DashboardHeadline } from "../components/DashboardHeadline"
import { Headline } from "../components/Headline"
import { NavigationBar } from "../components/NavigationBar"
import { colors } from "../theme"

export const Dashboard = () => {
  const theme = useColorScheme()

  useEffect(() => {
    //console.log(theme)
  }, [theme])

  return (
    <View style={[$container, { backgroundColor: colors[theme].background }]}>
      <ScrollView>
        <Headline>
          <DashboardHeadline />
        </Headline>
      </ScrollView>
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
}
