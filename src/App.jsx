import './App.css'
import { SideBar, MenuBar, MainSection } from './components'

function App() {

  return (
    <div className='App'>
      
      <SideBar/>
      
      <div className='Main'>
      <MenuBar/>
      <MainSection/>
      </div>
    </div>
  )
}

export default App
