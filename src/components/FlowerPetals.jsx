// Taç yaprakları merkez etrafında döndürülerek dizilir; her biri gecikmeli açılır.
const OUTER = 8;
const INNER = 6;

function petalPath(cx, cy, length, width) {
  const tipY = cy - length;
  return (
    `M${cx} ${cy} ` +
    `C ${cx - width} ${cy - length * 0.35}, ${cx - width * 0.9} ${tipY + 8}, ${cx} ${tipY} ` +
    `C ${cx + width * 0.9} ${tipY + 8}, ${cx + width} ${cy - length * 0.35}, ${cx} ${cy} Z`
  );
}

export default function FlowerPetals({ center }) {
  const { x, y } = center;
  const outer = petalPath(x, y, 78, 34);
  const inner = petalPath(x, y, 52, 24);
  const origin = `${x}px ${y}px`;

  return (
    <g className="petals">
      {Array.from({ length: OUTER }, (_, i) => (
        <g key={`o${i}`} transform={`rotate(${(360 / OUTER) * i} ${x} ${y})`}>
          <path
            className="petal petal-outer"
            d={outer}
            fill="url(#petalOuter)"
            style={{ animationDelay: `${3 + i * 0.12}s`, transformOrigin: origin }}
          />
        </g>
      ))}
      {Array.from({ length: INNER }, (_, i) => (
        <g key={`i${i}`} transform={`rotate(${(360 / INNER) * i + 30} ${x} ${y})`}>
          <path
            className="petal petal-inner"
            d={inner}
            fill="url(#petalInner)"
            style={{ animationDelay: `${4 + i * 0.12}s`, transformOrigin: origin }}
          />
        </g>
      ))}
      <circle
        className="flower-center"
        cx={x}
        cy={y}
        r="17"
        fill="url(#centerGrad)"
        style={{ transformOrigin: origin }}
      />
    </g>
  );
}
