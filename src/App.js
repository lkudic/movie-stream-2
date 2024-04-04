import NavBar from './pages/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Movies from './pages/movies';
import NoMatch from './pages/NoMatch';

const App = () => {
 return (
    <>
        <NavBar />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
       </Routes>
    </>
 );
};

export default App;