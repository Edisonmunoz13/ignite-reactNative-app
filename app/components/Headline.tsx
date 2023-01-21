import React from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle, Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

export const Headline = ({ children }) => {
  return (
    <View style={$topContainer}>
      <View style={$emptySpace}></View>
      {children}
      <TouchableOpacity>
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

const $configButton: ImageStyle = {
  width: 20,
  height: 20,
  marginRight: 16,
  marginTop: 9,
}
