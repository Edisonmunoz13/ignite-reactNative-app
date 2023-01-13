import { FlatList, View, Image, ViewStyle } from "react-native"
import { AccountCard } from "./AcountCard"
import React, { FC } from "react"

const data = [
  {
    key: "1",
    text: "Item 1",
    component: <AccountCard />,
  },
  {
    key: "2",
    text: "Item 2",
    component: <AccountCard />,
  },
  {
    key: "3",
    text: "Item 3",
    component: <AccountCard />,
  },
]

export const SliderAccounts = () => {
  return (
    <>
      <View style={$scrollIndicator}>
        <Image
          style={{ width: 5, height: 5 }}
          source={require("../../assets/images/carouselpoint.png")}
        />
        <Image
          style={{ width: 5, height: 5 }}
          source={require("../../assets/images/carouselpoint.png")}
        />
        <Image
          style={{ width: 5, height: 5 }}
          source={require("../../assets/images/carouselpoint.png")}
        />
        <Image
          style={{ width: 5, height: 5 }}
          source={require("../../assets/images/carouselpoint.png")}
        />
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        snapToInterval={366}
        horizontal={true}
        data={data}
        renderItem={({ item }) => <View>{item.component}</View>}
        keyExtractor={(item) => item.key}
      />
    </>
  )
}

const $scrollIndicator: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-around",
  marginLeft: 160,
  marginRight: 160,
  marginTop: -10,
  marginBottom: 6,
}
