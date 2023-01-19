import React from "react"
import { TextStyle, useColorScheme } from "react-native"
import { Text } from "."
import { colors } from "../theme"

export const CardsHeadline = () => {
  const theme = useColorScheme()
  return (
    <Text
      style={[$headline, { color: colors[theme].title }]}
      tx="cardsScreen.headline"
      preset="subheading"
    ></Text>
  )
}

const $headline: TextStyle = {
  marginTop: 45,
  marginBottom: 40,
}
