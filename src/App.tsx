import { Grid, GridItem, Show} from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'

function App() {
  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}>
    <Show above='lg'>
    <GridItem area='aside'>Aside</GridItem>
    </Show>
   <GridItem area='nav'><NavBar />
   
   </GridItem>
   
   
   <GridItem area='main'><GameGrid /></GridItem>
  </Grid>
}

export default App
