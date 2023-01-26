import { StackRouter, useNavigation } from "@react-navigation/native"
import React from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle, Text, Settings } from "react-native"
import { TouchableOpacity } from "react-native"
import { AppStackParamList, navigationRef } from "../navigators"

const settingsLocation: keyof AppStackParamList = "Settings"

export const Headline = ({ children }) => {
  return (
    <View style={$topContainer}>
      <View style={$emptySpace}></View>
      {children}
      <TouchableOpacity onPress={() => navigationRef.navigate(settingsLocation)}>
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
