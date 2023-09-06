/* import logoE from './logoCheese.svg' */
import './App.css';
import Navbar from '../src/components/NavBar/index-nav';
import ItemContainer from './components/ItemContainer/ItemContainer';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'


function App() {
  return (
    <div className="App">
      <header className="header">
        <Navbar/>
        <ItemContainer greeting={' Bienvenidos a MMMCheese '}/>
      </header>
    </div>
  );
}

export default App;
