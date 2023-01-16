import React, { FC } from "react"
import {
  Image,
  ImageStyle,
  TextStyle,
  View,
  ViewStyle,
  FlatList,
  useColorScheme,
} from "react-native"
import { colors } from "../theme"

export const NavigationBar = () => {
  const theme = useColorScheme()
  return (
    <View
      style={[$navigationContainer, { backgroundColor: colors[theme].white, borderRadius: 30 }]}
    >
      <Image style={$buttonIcons} source={require("../../assets/images/button1.png")}></Image>
      <Image style={$buttonIcons} source={require("../../assets/images/button2.png")}></Image>
      <Image style={$buttonIcons} source={require("../../assets/images/button3.png")}></Image>
      <Image style={$buttonIcons} source={require("../../assets/images/button4.png")}></Image>
    </View>
  )
}

const $navigationContainer: ViewStyle = {
  width: "100%",
  height: 150,

  flexDirection: "row",
  justifyContent: "space-between",
  padding: 30,
  position: "absolute",
  bottom: -62,
}

const $buttonIcons: ImageStyle = {
  width: 18,
  height: 19,
}
