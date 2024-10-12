
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/ItenListConteiner/ItemListConteiner';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';



function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListConteiner/>}/>
            <Route path='/category/:categoryId' element={<ItemListConteiner/>}/>
            <Route path='/detail/:productId' element={<ItemDetailConteiner/>}/>
            <Route path='*' element={<h1>404 not found</h1>}/>
            
          </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
