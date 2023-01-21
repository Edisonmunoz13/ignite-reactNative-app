import { observer } from "mobx-react-lite"
import React, { FC, useState } from "react"
import { Cards } from "./Cards"
import { HistoryAccount } from "./HistoryAccount"
import { Payments } from "./Payments"
import { Dashboard } from "./Dashboard"
import { NavigationBar } from "../components/NavigationBar"
import { AppStackParamList } from "../navigators"
import { StackScreenProps } from "@react-navigation/stack"

export const WelcomeScreen: FC<StackScreenProps<AppStackParamList, "Welcome">> = observer(
  ({ navigation }) => {
    const nextScreen = () => navigation.navigate("Dashboard")
    return (
      <>
        <HistoryAccount />
        <NavigationBar goDashboard={nextScreen} />
      </>
    )
  },
)
