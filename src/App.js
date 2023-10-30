import './App.css';
import Navbar from './components/Navbar';
import HeadSection from './components/HeadSection';
import MiddleSection from './components/MiddleSection';
import Plans from './components/Plans';
import Footer from './components/Footer';
import Working from './components/Working';

function App() {
  return (
    <div className="App">
        {/* <Navbar /> */}
        <HeadSection />
        
        {/* <MiddleSection /> */}           {/* This is in footer section */}      
        {/* <Working /> */}                 {/* This is in footer section */}
        <Footer />
    </div>
  );
}

export default App;
