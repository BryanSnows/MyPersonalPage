import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Curriculo from './components/pages/Curriculo';
import Sobre from './components/pages/Sobre';
import NewProject from './components/pages/NewProject';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer' ;
import Projects from './components/pages/Projects';



import Container from './components/layouts/Container';



function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
       <Routes>       
         <Route exact path="/" element={<Home/>}/>
         <Route exact path="/projects" element={<Projects/>}/>
         <Route exact path="/curriculo" element={<Curriculo/>}/>
         <Route exact path="/sobre" element={<Sobre/>}/>
         <Route exact path="/newproject" element={<NewProject/>}/>  
       </Routes>
      </Container>
      < Footer/>
    </Router>
  )
}

export default App;
