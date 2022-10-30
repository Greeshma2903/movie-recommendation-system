import ReactDOM from 'react-dom'
import Navbar from './components/Nav/Navbar'
import Popular from './components/PopularMovies/Popular'
import SearchSection from './components/Search/SearchSection'

function App() {
  const navRoot = document.getElementById("nav-root")

  return (
    <>
    {ReactDOM.createPortal(<Navbar/>, navRoot)}
    <SearchSection/>
    <Popular/>
    </>
  )
}

export default App
