
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/ItenListConteiner/ItemListConteiner';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListConteiner greeting={'Lista de Productos'}/>
    </div>
  );
}

export default App;
