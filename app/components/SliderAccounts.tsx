import { FlatList, View } from "react-native"
import { AccountCard } from "./AcountCard"
import React, { FC } from "react"

const data = [
  { key: "1", text: "Item 1", component: <AccountCard /> },
  { key: "2", text: "Item 2", component: <AccountCard /> },
  { key: "3", text: "Item 3", component: <AccountCard /> },
]

export const SliderAccounts = () => {
  return (
    <FlatList
      snapToInterval={365}
      horizontal={true}
      data={data}
      renderItem={({ item }) => <View>{item.component}</View>}
      keyExtractor={(item) => item.key}
    />
  )
}
