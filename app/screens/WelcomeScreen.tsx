import { observer } from "mobx-react-lite"
import React, { FC, useState } from "react"
import { Cards } from "./Cards"
import { HistoryAccount } from "./HistoryAccount"
import { Payments } from "./Payments"
import { Dashboard } from "./Dashboard"

export const WelcomeScreen: FC = observer(function WelcomeScreen() {
  return <HistoryAccount />
})
