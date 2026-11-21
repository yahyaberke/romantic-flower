import FlowerStem from './FlowerStem.jsx';
import FlowerPetals from './FlowerPetals.jsx';

// SVG koordinat sistemi: 300 x 520. Çiçek merkezi (150, 170).
const FLOWER_CENTER = { x: 150, y: 170 };

export default function FlowerAnimation() {
  return (
    <div className="flower-wrap" role="img" aria-label="Açan bir çiçek">
      <div className="flower-glow" aria-hidden="true" />
      <svg className="flower-svg" viewBox="0 0 300 520" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="stemGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5fd38d" />
            <stop offset="100%" stopColor="#1f7a47" />
          </linearGradient>
          <linearGradient id="leafGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6fe39b" />
            <stop offset="100%" stopColor="#23874f" />
          </linearGradient>
          <radialGradient id="petalOuter" cx="50%" cy="100%" r="100%">
            <stop offset="0%" stopColor="#ffd0de" />
            <stop offset="45%" stopColor="#ff6f9a" />
            <stop offset="100%" stopColor="#d92e64" />
          </radialGradient>
          <radialGradient id="petalInner" cx="50%" cy="100%" r="100%">
            <stop offset="0%" stopColor="#fff0f5" />
            <stop offset="55%" stopColor="#ff9dbb" />
            <stop offset="100%" stopColor="#ff5c8a" />
          </radialGradient>
          <radialGradient id="centerGrad" cx="40%" cy="40%" r="70%">
            <stop offset="0%" stopColor="#fff3b0" />
            <stop offset="60%" stopColor="#ffc94a" />
            <stop offset="100%" stopColor="#e0902a" />
          </radialGradient>
        </defs>

        <FlowerStem />
        <FlowerPetals center={FLOWER_CENTER} />
      </svg>
    </div>
  );
}
