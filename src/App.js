
import './App.css';
import Navbar from './Componants/Navbar/Navbar';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
function App() {
  return (
    <div >
      <BrowserRouter>
    <Navbar/>
   <Routes>
    <Route path='/' element={<Shop/>}/>
    <Route path='/mens' element={<ShopCategory category="men"/>}/>
    <Route path='/women' element={<ShopCategory category="women"/>}/>
    <Route path='/kids' element={<ShopCategory category="kids"/>}/>
    <Route path='/product' element={<Products/>}>
    <Route path=':productId' element={<Products/>}/>
    </Route>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<LoginSignup/>}/>






</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
