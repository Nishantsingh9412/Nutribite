import './App.css';
import Navbar from './components/Navbar';
import HeadSection from './components/HeadSection';
import MiddleSection from './components/MiddleSection';
import Plans from './components/Plans';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <h2> Hello  </h2> */}
        <Navbar />
        <HeadSection />
        <MiddleSection />
        <Plans />
        <Footer />
    </div>
  );
}

export default App;
