import { observer } from "mobx-react-lite"
import React, { FC, useState } from "react"
import { useColorScheme } from "react-native"
import { HistoryAccount } from "./HistoryAccount"

export const WelcomeScreen: FC = observer(function WelcomeScreen() {
  return <HistoryAccount />
})
