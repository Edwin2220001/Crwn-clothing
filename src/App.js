import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component";
import Contacts from "./routes/contacts/contacts.component";

const Shop= () => {
  return <h2>This is shop</h2>
};

const App = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='shop' element={<Shop />}/>
        <Route path='sign-in' element={<SignIn />}/>
        <Route path='contacts' element={<Contacts />}/>
      </Routes>
    </div>
  );
};

export default App;