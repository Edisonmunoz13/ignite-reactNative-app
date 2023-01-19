import { observer } from "mobx-react-lite"
import React, { FC, useState } from "react"
import { HistoryAccount } from "./HistoryAccount"
import { NavigationBar } from "../components/NavigationBar"

export const WelcomeScreen: FC = observer(function WelcomeScreen() {
  return <HistoryAccount />
})
