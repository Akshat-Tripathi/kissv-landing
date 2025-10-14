import DraftMode from './components/DraftMode';
import EnhancedMode from './components/EnhancedMode';
import GradualBlur from './components/GradualBlur';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Performance from './components/Performance';

function App() {
  return (
    <div className="min-h-screen bg-transparent">
      <GradualBlur
        target="page"
        position="bottom"
        height="6rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
      <Hero />
      <HowItWorks />
      <Performance />
      <DraftMode />
      <EnhancedMode />
    </div>
  );
}

export default App;
