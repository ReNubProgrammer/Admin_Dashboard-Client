import { Route, Routes } from 'react-router-dom';
import './style/App.css';
import Home from './page/_dashboard';
import Order from './page/order';
import Product from './page/product';
import Team from './page/team';
import Cashflow from './page/cashflow';
import NotFound from './page/404';
import Agenda from './page/agenda';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/*" element={<NotFound/>}></Route>
      <Route path='/agenda' element={<Agenda/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/order' element={<Order/>}></Route>
      <Route path='/team' element={<Team/>}></Route>
      <Route path='/cashflow' element={<Cashflow/>}></Route>
    </Routes>
  );
}

export default App;
