import React from "react"
import { TextStyle, useColorScheme } from "react-native"
import { Text } from "."
import { colors } from "../theme"

export const DashboardHeadline = () => {
  const theme = useColorScheme()
  return (
    <Text
      style={[$headline, { color: colors[theme].title }]}
      tx="dashboardScreen.headline"
      preset="subheading"
    ></Text>
  )
}

const $headline: TextStyle = {
  marginTop: 45,
  marginBottom: 40,
}
