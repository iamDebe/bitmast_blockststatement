
import SignupForm from './Pages/SignupForm';
import LoginForm from './Pages/LoginForm';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import TransactionDetail from './Pages/TransactionDetail';
import TransactionHistory from './Pages/TransactionTable';
import Search from './Components/Search';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<SignupForm />}/>
      <Route path='/search' element={<Search />}/>
      <Route path='/login' element={<LoginForm />}/>
      <Route path='/details' element={<TransactionDetail />}/>
      <Route path='/history' element={<TransactionHistory />}/>

      
    </Routes> 
  );
}

export default App;
