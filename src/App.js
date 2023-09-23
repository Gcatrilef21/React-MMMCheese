/* import logoE from './logoCheese.svg' */
import './App.css';
import Navbar from '../src/components/NavBar/index-nav';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import CounterApp from './components/ItemCount/ItemCount';
import ItemContainer from './components/ItemContainer/ItemContainer';


function App() {
  return (
    <div className="App">
      <main className="header">
        <Navbar/>
        <ItemContainer greeting={' Bienvenido '}/>
        <br/>
        
        {/* <CounterApp initial={0} stock={10} onAdd={(quantity) => console.log('Productos Agregados', quantity)}/> */}
      </main>
    </div>
  )
}

export default App;
