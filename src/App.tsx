import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Benchmarking from './components/Benchmarking';
import EnhancedMode from './components/EnhancedMode';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Performance from './components/Performance';
import TurboMode from './components/TurboMode';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-transparent">
        <Routes>
          {/* Home page */}
          <Route path="/" element={
            <>
              <Hero />
              <HowItWorks />
              <Performance />
              <TurboMode />
              <EnhancedMode />
              <Footer />
            </>
          } />

          {/* Benchmarking Data */}
          <Route path="/benchmarking" element={
            <>
              <Benchmarking />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
