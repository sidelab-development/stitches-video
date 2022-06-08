import { Switch } from "@chakra-ui/react"
import { Switcher } from "./components/Switcher"
import { useStorage } from "./hooks/useStorage"
import { useTheme } from "./hooks/useTheme"
import { GlobalCss } from "./styles/global"
import { styled } from "./styles/stitches.config"
import { dark } from "./styles/theme/dark"

const TitleExample = styled('h1', {
  color: '$tertiary',
  fontSize: '4rem',
  marginRight: '2rem'
})

const Container = styled('div', {
  background: '$primary',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})


function App() {
  const {theme} = useTheme()

  return (
    <Container className={theme}>
      <TitleExample>Stitches</TitleExample>
      <Switcher />
      {GlobalCss()}
    </Container>
  )
}

export default App
