// App.jsx
import { useState } from 'react';
import AppLanding from './AppLanding';
import YieldCalculator from './YieldCalculator';
import JarFlipCalculator from './JarFlipCalculator.jsx';
import RosinPressingCalculator from './RosinPressingCalculator';
import ConsumptionCalculator from './ConsumptionCalculator';
import WinnersCircle from './WinnersCircle';


// import other calculators here as they’re built

function App() {
  const [activeTool, setActiveTool] = useState('landing');

  const renderTool = () => {
    switch (activeTool) {
      case 'yield':
        return <YieldCalculator onBack={() => setActiveTool('landing')} />;
      case 'jarflip':
        return <JarFlipCalculator onBack={() => setActiveTool('landing')} />;
      case 'pressing':
        return <RosinPressingCalculator onBack={() => setActiveTool('landing')} />;
      case 'consumption':
        return <ConsumptionCalculator onBack={() => setActiveTool('landing')} />;
            case 'winners':
      return <WinnersCircle onBack={() => setActiveTool('landing')} />;

      // add more cases here as you build out additional calculators
      default:
        return <AppLanding onNavigate={setActiveTool} />;
    }
  };

  return (
    <div style={{ backgroundColor: '#0e0e0e', color: '#fff', minHeight: '100vh' }}>
      {renderTool()}
    </div>
  );
}

export default App;

