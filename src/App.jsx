import { useEffect, useState } from 'react';
import StartScreen from './components/StartScreen.jsx';
import FlowerAnimation from './components/FlowerAnimation.jsx';
import Particles from './components/Particles.jsx';
import FinalMessage from './components/FinalMessage.jsx';
import { config, timing } from './config.js';

// Aşamalar: start → blooming → final
export default function App() {
  const [phase, setPhase] = useState('start');
  const [runId, setRunId] = useState(0);

  useEffect(() => {
    if (phase !== 'blooming') return undefined;
    const t = setTimeout(() => setPhase('final'), timing.messageDelay);
    return () => clearTimeout(t);
  }, [phase, runId]);

  const start = () => setPhase('blooming');
  const replay = () => {
    setRunId((n) => n + 1);
    setPhase('blooming');
  };

  return (
    <main className="app">
      <div className="sky" aria-hidden="true" />

      {phase === 'start' && (
        <StartScreen title={config.startTitle} buttonText={config.startButton} onStart={start} />
      )}

      {phase !== 'start' && (
        <>
          <Particles key={`p-${runId}`} />
          <FlowerAnimation key={`f-${runId}`} />
        </>
      )}

      {phase === 'final' && (
        <FinalMessage
          title={config.finalTitle}
          message={config.finalMessage}
          signature={config.signature}
          replayText={config.replayButton}
          onReplay={replay}
        />
      )}
    </main>
  );
}
