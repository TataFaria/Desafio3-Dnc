import './App.css';
import Navbar from './Componentes/sections/NavBar';
import Presentation from './Componentes/sections/Presentation';
import Project from './Componentes/sections/Project';
import TimeLine from './Componentes/sections/TimeLine';
import Footer from './Componentes/sections/Footer';



function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Presentation/>
      <Project/>
      <TimeLine/>
      <Footer/>
    </div>
  );
}
  
export default App;
