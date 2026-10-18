const birds = [
  { y: '10%', duration: '16s', delay: '-3s', scale: 1.05, wingDuration: '1s', wingDelay: '-0.5s' },
  { y: '18%', duration: '18s', delay: '-10s', scale: 0.82, wingDuration: '0.9s', wingDelay: '-0.2s' },
  { y: '7%', duration: '14.5s', delay: '-6s', scale: 0.7, wingDuration: '1.1s', wingDelay: '-0.7s' },
  { y: '28%', duration: '19s', delay: '-14s', scale: 1.15, wingDuration: '0.95s', wingDelay: '-0.4s' },
  { y: '15%', duration: '16.5s', delay: '-8s', scale: 0.9, wingDuration: '1.05s', wingDelay: '-0.1s' },
]

export function BirdFlock({ className = '' }) {
  return (
    <div className={`bird-flock ${className}`.trim()} aria-hidden="true">
      {birds.map((bird, index) => (
        <div
          key={`${bird.y}-${index}`}
          className="bird-container"
          style={{
            '--y': bird.y,
            '--d': bird.duration,
            '--delay': bird.delay,
            '--s': bird.scale,
          }}
        >
          <div
            className="bird"
            style={{
              '--fd': bird.wingDuration,
              '--fdelay': bird.wingDelay,
            }}
          >
            <span className="bird__wing bird__wing--left" />
            <span className="bird__wing bird__wing--right" />
            <span className="bird__body" />
          </div>
        </div>
      ))}
    </div>
  )
}
