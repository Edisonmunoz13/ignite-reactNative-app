import { observer } from "mobx-react-lite"
import React, { FC, useState } from "react"
import {
  Image,
  ImageStyle,
  TextStyle,
  View,
  ViewStyle,
  FlatList,
  useColorScheme,
} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Text } from "../components"
import { colors, spacing } from "../theme"

export const Headline = () => {
  const theme = useColorScheme()
  return (
    <View style={$topContainer}>
      <View style={$emptySpace}></View>

      <Text
        style={[$headline, { color: colors[theme].white }]}
        tx="welcomeScreen.headline"
        preset="subheading"
      ></Text>
      <TouchableOpacity onPress={() => console.log("Button pressed!")}>
        <Image style={$configButton} source={require("../../assets/images/config.png")} />
      </TouchableOpacity>
    </View>
  )
}

const $topContainer: ViewStyle = {
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
}

const $emptySpace: ViewStyle = {
  width: 36,
}

const $headline: TextStyle = {
  marginTop: 45,
  marginBottom: 40,
}

const $configButton: ImageStyle = {
  width: 20,
  height: 20,
  marginRight: 16,
  marginTop: 9,
}
