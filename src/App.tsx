import DraftMode from './components/DraftMode';
import EnhancedMode from './components/EnhancedMode';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Performance from './components/Performance';

function App() {
  return (
    <div className="min-h-screen bg-transparent">
      <Hero />
      <HowItWorks />
      <Performance />
      <DraftMode />
      <EnhancedMode />
    </div>
  );
}

export default App;
