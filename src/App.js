import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={ <Homepage /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/products" element={ <Products /> }/>
          <Route path="/contact" element={ <Contact /> } />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
