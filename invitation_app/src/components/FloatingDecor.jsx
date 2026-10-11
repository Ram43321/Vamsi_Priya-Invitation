import { RosePetal } from './DecorativeOrnaments.jsx'

const PETALS = [
  { left: '6%', delay: '0s', duration: '16s', size: 18, color: '#c45c68' },
  { left: '14%', delay: '2.4s', duration: '18s', size: 14, color: '#d4af37' },
  { left: '22%', delay: '5s', duration: '15s', size: 20, color: '#a83246' },
  { left: '31%', delay: '1.1s', duration: '19s', size: 12, color: '#e8c872' },
  { left: '42%', delay: '3.6s', duration: '17s', size: 16, color: '#b84555' },
  { left: '53%', delay: '7s', duration: '21s', size: 13, color: '#d4af37' },
  { left: '61%', delay: '0.8s', duration: '16s', size: 19, color: '#8e1f33' },
  { left: '72%', delay: '4.2s', duration: '18s', size: 15, color: '#c9a227' },
  { left: '81%', delay: '6.5s', duration: '20s', size: 17, color: '#c45c68' },
  { left: '90%', delay: '2s', duration: '15s', size: 12, color: '#f0d48a' },
  { left: '38%', delay: '8.4s', duration: '22s', size: 14, color: '#d48a96' },
  { left: '67%', delay: '9.1s', duration: '17s', size: 11, color: '#d4af37' },
]

const SPARKS = [
  { left: '8%', delay: '0s', duration: '9s' },
  { left: '18%', delay: '1.4s', duration: '11s' },
  { left: '29%', delay: '3s', duration: '8s' },
  { left: '41%', delay: '0.6s', duration: '12s' },
  { left: '55%', delay: '2.2s', duration: '10s' },
  { left: '66%', delay: '4.1s', duration: '9s' },
  { left: '77%', delay: '1.8s', duration: '13s' },
  { left: '88%', delay: '3.5s', duration: '8s' },
  { left: '48%', delay: '5s', duration: '11s' },
  { left: '12%', delay: '6.2s', duration: '10s' },
]

export function FloatingDecor() {
  return (
    <div className="floating-decor" aria-hidden="true">
      {PETALS.map((petal, index) => (
        <span
          key={`petal-${index}`}
          className={`petal petal-${index}`}
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            color: petal.color,
            width: petal.size,
            height: petal.size * 1.35,
          }}
        >
          <RosePetal />
        </span>
      ))}
      {SPARKS.map((spark, index) => (
        <span
          key={`spark-${index}`}
          className={`spark spark-${index}`}
          style={{
            left: spark.left,
            animationDelay: spark.delay,
            animationDuration: spark.duration,
          }}
        />
      ))}
    </div>
  )
}
