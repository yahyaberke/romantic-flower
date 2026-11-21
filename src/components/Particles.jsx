import { useMemo } from 'react';

const SYMBOLS = ['❤', '✦', '❀', '♡', '✧'];
const COLORS = ['#ff6f9a', '#ffb3c9', '#ffd36e', '#ffffff', '#ff9dbb'];

// Ekranda yukarı doğru süzülen kalpler ve parıltılar.
export default function Particles({ count = 28 }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        symbol: SYMBOLS[i % SYMBOLS.length],
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        left: Math.random() * 100,
        size: 10 + Math.random() * 18,
        delay: 2.5 + Math.random() * 8,
        duration: 7 + Math.random() * 7,
        drift: (Math.random() - 0.5) * 120,
      })),
    [count]
  );

  return (
    <div className="particles" aria-hidden="true">
      {items.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            color: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            '--drift': `${p.drift}px`,
          }}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  );
}
