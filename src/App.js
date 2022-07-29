import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import Homepage from './Components/homepage';
import About from './Components/about';
import Contact from './Components/contact';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Homepage />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>    
    </HashRouter>
  );
}

export default App;
