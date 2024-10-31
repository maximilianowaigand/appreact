
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/ItenListConteiner/ItemListConteiner';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
import { CartProvider } from './context/CartContext';
import { NotificationProvider } from './notification/NotificationService';


function App() {

    


  return (
    <div className="App">
      <NotificationProvider>
      <CartProvider>
       <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListConteiner/>}/>
            <Route path='/category/:categoryId' element={<ItemListConteiner/>}/>
            <Route path='/detail/:productId' element={<ItemDetailConteiner/>}/>
            <Route path='/cart'/>
            <Route path='*' element={<h1>404 not found</h1>}/>
          </Routes>
       </BrowserRouter>
      </CartProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
