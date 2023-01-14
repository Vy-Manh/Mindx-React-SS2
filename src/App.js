
import './App.css';
import Header from './page/navbar/header';
import Home from './page/content/home';
import Phone from './page/content/phone';
import ShowItems from './page/content/showItems';
import Footer from './page/footer/footer';
import {Routes, Route} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <header>
      <Header/>
      </header>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/Phone' element={ <Phone/>}/>
        <Route path='/showItems' element={ <ShowItems/>}/>
      </Routes>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
