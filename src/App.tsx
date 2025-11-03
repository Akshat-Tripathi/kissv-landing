import EnhancedMode from './components/EnhancedMode';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Performance from './components/Performance';
import TurboMode from './components/TurboMode';

function App() {
  return (
    <div className="min-h-screen bg-transparent">
      <Hero />
      <HowItWorks />
      <Performance />
      <TurboMode />
      <EnhancedMode />
      <Footer />
    </div>
  );
}

export default App;
