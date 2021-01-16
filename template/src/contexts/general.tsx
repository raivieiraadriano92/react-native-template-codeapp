import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState
} from 'react'
import { Appearance } from 'react-native'

type Props = PropsWithChildren<{
  //
}>

type GeneralContextValues = {
  darkMode: boolean
  toggleDarkMode(): void
}

const GeneralContext = createContext<GeneralContextValues>(
  {} as GeneralContextValues
)

export function useGeneralContext(): GeneralContextValues {
  return useContext(GeneralContext)
}

export default function ({ children }: Props): JSX.Element {
  const [darkMode, setDarkMode] = useState(
    Appearance.getColorScheme() === 'dark'
  )

  const toggleDarkMode = useCallback(async () => {
    setDarkMode(!darkMode)
  }, [darkMode])

  return (
    <GeneralContext.Provider
      value={{
        darkMode,
        toggleDarkMode
      }}
    >
      {children}
    </GeneralContext.Provider>
  )
}
