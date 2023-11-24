import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Visual from './components/Visual';






function App() {
  return (
    <>

   

    <div>

      <Routes>

        <Route path='/'  element={<Home />} />
        <Route path='/login'  element={<Visual/>} />
       
       

      </Routes>



    </div>

    
     
    </>

  );  
}

export default App;
