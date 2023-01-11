import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle, FlatList } from "react-native"
import { Text } from "../components"
import { colors, spacing } from "../theme"

export const Headline = () => {
  return (
    <View style={$topContainer}>
      <Text style={$headline} tx="welcomeScreen.headline" preset="subheading"></Text>
    </View>
  )
}

const $topContainer: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
}

const $headline: TextStyle = {
  color: "#fff",
  marginTop: 45,
  marginBottom: 40,
}
