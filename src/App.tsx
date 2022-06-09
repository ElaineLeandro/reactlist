import './global.css'
import {Butterfly} from 'phosphor-react'
import { Container } from './template/Container'
import { Home } from './pages/Home'

function App() {
  
  return (
    <div className="App">
      <Container>
        <Home/>
        
      </Container>
    </div>
  )
}

export default App
