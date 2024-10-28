import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Skills from './components/Skills';
import Projects from './components/projects';
import ContactForm from './components/ContactForm';
function App() {

  return (
    <div className="App">
      <Navbar />
      <Main id="mainy" />
      <Skills id="skills" />
      <Projects id="project" />
      <ContactForm id="contact" />
    </div>

  );
}

export default App;
