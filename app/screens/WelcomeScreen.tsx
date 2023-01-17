import { observer } from "mobx-react-lite"
import React, { FC, useState } from "react"
import { HistoryAccount } from "./HistoryAccount"

export const WelcomeScreen: FC = observer(function WelcomeScreen() {
  return <HistoryAccount />
})
