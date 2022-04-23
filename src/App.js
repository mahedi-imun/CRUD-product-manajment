import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AddProduct from './components/Products/AddProduct';
import Products from './components/Products/Products';
import UpdateProduct from './components/Products/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Products></Products>}></Route>
        <Route path='/addproduct' element={<AddProduct></AddProduct>}></Route>
        <Route path='/updateproduct/:id' element={<UpdateProduct></UpdateProduct>}></Route>
      </Routes>

     
    </div>
  );
}

export default App;
