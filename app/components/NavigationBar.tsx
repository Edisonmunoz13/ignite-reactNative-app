import React, { FC } from "react"
import { Image, ImageStyle, View, ViewStyle, useColorScheme, TouchableOpacity } from "react-native"
import { navigationRef } from "../navigators"
import { colors } from "../theme"
import { AppStackParamList } from "../navigators"

const buttons = [
  { name: "dashboard", icon: require("../../assets/images/button1.png") },
  { name: "cards", icon: require("../../assets/images/button2.png") },
  { name: "account history", icon: require("../../assets/images/button3.png") },
  { name: "payments", icon: require("../../assets/images/button4.png") },
]

export const NavigationBar = ({ goDashboard }) => {
  const theme = useColorScheme()

  return (
    <>
      <View
        style={[$navigationContainer, { backgroundColor: colors[theme].white, borderRadius: 30 }]}
      >
        {buttons.map((item, index) => (
          <TouchableOpacity onPress={goDashboard}>
            <Image style={$buttonIcons} source={item.icon} />
          </TouchableOpacity>
        ))}
      </View>
    </>
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
