import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Category from './pages/Category';
import Checkout from './pages/Checkout';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Product from './pages/Product';
import UserAccount from './pages/UserAccount';

const App = () => {
    const test = 1;
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/category" element={<Category />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/userAccount" element={<UserAccount />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
