
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/ItenListConteiner/ItemListConteiner';
import Counter from './components/Count/countList';



function App() {

  const handeonAdd = () =>{
    console.log('mostras mensaje')
  }

  return (
    <div className="App">
      <NavBar/>
      <ItemListConteiner />
      <Counter onAdd={handeonAdd}/>
    </div>
  );
}

export default App;
