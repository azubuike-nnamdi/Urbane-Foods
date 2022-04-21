import {BrowserRouter, Routes, Route} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Contacts from './components/Contacts'
import Navigation from './Navigation'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/contacts' element={<Contacts />}></Route>
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
