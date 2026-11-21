// Sap stroke-dashoffset ile "çiziliyor", yapraklar ardından büyüyor.
export default function FlowerStem() {
  return (
    <g className="stem-group">
      <path
        className="stem"
        d="M150 515 C 120 440, 180 380, 152 300 S 140 210, 150 172"
        fill="none"
        stroke="url(#stemGrad)"
        strokeWidth="7"
        strokeLinecap="round"
        pathLength="1"
      />
      <path
        className="leaf leaf-left"
        d="M150 400 C 115 380, 85 392, 62 365 C 98 348, 134 362, 150 400 Z"
        fill="url(#leafGrad)"
      />
      <path
        className="leaf leaf-right"
        d="M154 300 C 188 280, 218 290, 240 262 C 205 250, 170 262, 154 300 Z"
        fill="url(#leafGrad)"
      />
    </g>
  );
}
