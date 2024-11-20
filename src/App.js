
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/ItenListConteiner/ItemListConteiner';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
import Cart from './components/Cart/cart';
import { CartProvider } from './context/CartContext';
import { NotificationProvider } from './notification/NotificationService';
import Checkout from './components/Checkout/checkout';
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
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<h1>404 not found</h1>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
       </BrowserRouter>
      </CartProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
