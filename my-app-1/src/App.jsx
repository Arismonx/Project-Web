import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Container from './components/Container';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';

function App() {

  return (
    <div>
      <Body>
        <Container>
          <Navbar />
          <Header/>
          <Hero/>
          <AboutMe/>
          <Contact/>
        </Container>
      </Body>
    </div>
  );
}

export default App;
