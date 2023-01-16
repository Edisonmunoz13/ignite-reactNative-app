import { observer } from "mobx-react-lite"
import React, { FC, useState } from "react"
import { useColorScheme } from "react-native"
import { LigthScreen } from "./LigthScreen"

export const WelcomeScreen: FC = observer(function WelcomeScreen() {
  return <LigthScreen onPress={console.log("ligthScreen")} />
})
