import React, { FC, useState, useEffect } from "react"
import { Image, ImageStyle, View, ViewStyle, useColorScheme, TouchableOpacity } from "react-native"
import { navigationRef } from "../navigators"
import { colors } from "../theme"
import { AppStackParamList } from "../navigators"

type navButton = {
  name: keyof AppStackParamList
  icon: unknown
  activeIcon: unknown
}

const buttons: navButton[] = [
  {
    name: "Dashboard",
    icon: require("../../assets/images/button1.png"),
    activeIcon: require("../../assets/images/button5.png"),
  },
  {
    name: "Cards",
    icon: require("../../assets/images/button2.png"),
    activeIcon: require("../../assets/images/button6.png"),
  },
  {
    name: "HistoryAccount",
    icon: require("../../assets/images/button7.png"),
    activeIcon: require("../../assets/images/button3.png"),
  },
  {
    name: "Payments",
    icon: require("../../assets/images/button4.png"),
    activeIcon: require("../../assets/images/button8.png"),
  },
]

export const NavigationBar = () => {
  const theme = useColorScheme()
  const [screenIsActive, setscreenIsActive] = useState<keyof AppStackParamList>(null)

  const changeScreen = (index) => {
    setscreenIsActive(buttons[index].name)
    navigationRef.navigate(buttons[index].name)
    console.log(`change to ${buttons[index].name}`)
  }

  return (
    <>
      <View
        style={[$navigationContainer, { backgroundColor: colors[theme].white, borderRadius: 30 }]}
      >
        {buttons.map((item, index) => (
          <TouchableOpacity onPress={() => changeScreen(index)}>
            <Image
              style={$buttonIcons}
              source={screenIsActive === item.name ? item.activeIcon : item.icon}
            />
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
