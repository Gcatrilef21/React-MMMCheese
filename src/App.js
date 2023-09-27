/* import logoE from './logoCheese.svg' */
import './App.css';
import Navbar from '../src/components/NavBar/index-nav';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home/home';
import Products from './components/pages/Products/cheeses';




function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <main className="header">
        <Navbar/>
        <Routes>
          <Route path='/' element= {<Home greeting={'Bienvenidos'}/>} />
          <Route path='/products' element= {<Products/>} />
          <Route path='/products/:idCheese' element= {<Products/>} />
        </Routes>
        <br/>
        {<ItemDetailContainer />}
      </main>
    </div>
    </BrowserRouter>
  )
}

export default App;
