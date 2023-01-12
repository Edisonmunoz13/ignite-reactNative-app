import { observer } from "mobx-react-lite"
import React, { FC, useState } from "react"
import { DarkScreen } from "./DarkScreen"
import { LigthScreen } from "./LigthScreen"

export const WelcomeScreen: FC = observer(function WelcomeScreen() {
  const [dark, setDark] = useState<boolean>(true)

  function handlePress() {
    setDark(!dark)
  }

  setTimeout(() => {
    setDark(true)
  }, 30000)

  if (dark) {
    return <LigthScreen onPress={handlePress} />
  }
  return <DarkScreen />
})
