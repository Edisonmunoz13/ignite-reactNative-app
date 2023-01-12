import React, { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle, FlatList } from "react-native"
import { Text } from "."

export const NavigationBar = () => {
  return (
    <View style={$navigationContainer}>
      <Image style={$buttonIcons} source={require("../../assets/images/button1.png")}></Image>
      <Image style={$buttonIcons} source={require("../../assets/images/button2.png")}></Image>
      <Image style={$buttonIcons} source={require("../../assets/images/button3.png")}></Image>
      <Image style={$buttonIcons} source={require("../../assets/images/button4.png")}></Image>
    </View>
  )
}

const $navigationContainer: ViewStyle = {
  backgroundColor: "#FEFEFE",
  width: "100%",
  height: 150,
  borderRadius: 30,
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
