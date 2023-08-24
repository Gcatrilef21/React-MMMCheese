/* import logoE from './logoCheese.svg' */
import './App.css';
import Navbar from '../src/components/NavBar/index-nav';
import ItemContainer from './components/ItemContainer';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'


function App() {
  return (
    <div className="App">
      <header className="header">
        <Navbar/>
        <ItemContainer/>
      </header>
    </div>
  );
}

export default App;
