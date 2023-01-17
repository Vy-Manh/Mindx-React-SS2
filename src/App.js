import './App.css';
import Header from './page/navbar/header';
import Home from './page/content/home';
import Phone from './page/content/phone';
import ShowItems from './page/content/showItems';
import Footer from './page/footer/footer';
import {Routes, Route} from 'react-router-dom'
import Maytinh from './page/navbar/Maytinh';
import Login from './page/Login/Login';
import PrivateRoutes from './page/Login/PrivateRoutes';
import Register from './page/Login/Register';


function App() {
  return (
    <div className="App">
      <header>
      <Header/>
      </header>
      <Routes>
      {/* <Route element={<PrivateRoutes />}>
          
      </Route> */}
        <Route path='/' element={ <Home/>}/>
        <Route path='/Phone' element={ <Phone/>}/>
        <Route path='/showItems' element={ <ShowItems/>}/>
        <Route path='/MayTinh' element={ <Maytinh/>}/>
        <Route path='/Login' element={ <Login/>}/>
        <Route path='/register' element={<Register/>} />
      </Routes>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
