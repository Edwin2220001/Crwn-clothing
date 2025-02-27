import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';

import Home from "./routes/home/home.component";
import Shop from './routes/shop/shop.component';
import Authentication from "./routes/authentication/authentication.component";
import Checkout from "./routes/checkout/checkout.component";


const App = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='shop/*' element={<Shop />}/>
        <Route path='auth' element={<Authentication />}/>
        <Route path='checkout' element={<Checkout />} />
      </Routes>
    </div>
  );
};

export default App;