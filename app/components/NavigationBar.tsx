import React, { FC, useState } from "react"
import { Image, ImageStyle, View, ViewStyle, useColorScheme, TouchableOpacity } from "react-native"
import { navigationRef } from "../navigators"
import { colors } from "../theme"
import { AppStackParamList } from "../navigators"

type navButton = {
  name: string
  icon: any
}

const buttons: navButton[] = [
  { name: "Dashboard", icon: require("../../assets/images/button1.png") },
  { name: "Cards", icon: require("../../assets/images/button2.png") },
  { name: "HistoryAccount", icon: require("../../assets/images/button3.png") },
  { name: "Payments", icon: require("../../assets/images/button4.png") },
]

export const NavigationBar = () => {
  const theme = useColorScheme()

  return (
    <>
      <View
        style={[$navigationContainer, { backgroundColor: colors[theme].white, borderRadius: 30 }]}
      >
        {buttons.map((item, index) => (
          <TouchableOpacity onPress={() => navigationRef.navigate(buttons[index].name)}>
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
