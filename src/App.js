import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Upcoming from './components/Upcoming';
import HowIWork from './components/HowIWork';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar /> 
      <Banner />
      <HowIWork />
      <Upcoming/>
      <Footer />

    </div>
  );
}

export default App;
