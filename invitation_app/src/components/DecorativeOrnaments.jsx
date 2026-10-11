import { useId } from 'react'

function GoldPaint({ id }) {
  return (
    <linearGradient id={id} x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#fff6d4" />
      <stop offset="42%" stopColor="#e4c56a" />
      <stop offset="100%" stopColor="#9a7218" />
    </linearGradient>
  )
}

export function Mandala({ className }) {
  const uid = useId()
  const gold = `${uid}-gold`

  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <GoldPaint id={gold} />
      </defs>
      <g stroke={`url(#${gold})`} strokeWidth="1.15">
        <circle cx="200" cy="200" r="188" opacity="0.55" />
        <circle cx="200" cy="200" r="168" opacity="0.85" />
        <circle cx="200" cy="200" r="118" />
        <circle cx="200" cy="200" r="72" />
        <circle cx="200" cy="200" r="28" />
        {Array.from({ length: 16 }, (_, index) => (
          <ellipse
            key={`outer-${index}`}
            cx="200"
            cy="58"
            rx="16"
            ry="42"
            transform={`rotate(${index * 22.5} 200 200)`}
            opacity="0.9"
          />
        ))}
        {Array.from({ length: 12 }, (_, index) => (
          <ellipse
            key={`mid-${index}`}
            cx="200"
            cy="108"
            rx="12"
            ry="28"
            transform={`rotate(${index * 30} 200 200)`}
          />
        ))}
        {Array.from({ length: 8 }, (_, index) => (
          <path
            key={`diamond-${index}`}
            d="M200 148 L214 200 L200 252 L186 200 Z"
            transform={`rotate(${index * 45} 200 200)`}
            opacity="0.75"
          />
        ))}
      </g>
      <circle cx="200" cy="200" r="10" fill={`url(#${gold})`} />
    </svg>
  )
}

export function Lotus({ className }) {
  const uid = useId()
  const gold = `${uid}-gold`

  return (
    <svg
      className={className}
      viewBox="0 0 220 160"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <GoldPaint id={gold} />
      </defs>
      <g fill={`url(#${gold})`} stroke={`url(#${gold})`} strokeWidth="0.6">
        <ellipse cx="110" cy="118" rx="18" ry="48" opacity="0.95" />
        <ellipse cx="110" cy="116" rx="18" ry="48" transform="rotate(-22 110 120)" opacity="0.85" />
        <ellipse cx="110" cy="116" rx="18" ry="48" transform="rotate(22 110 120)" opacity="0.85" />
        <ellipse cx="110" cy="118" rx="20" ry="46" transform="rotate(-44 110 124)" opacity="0.7" />
        <ellipse cx="110" cy="118" rx="20" ry="46" transform="rotate(44 110 124)" opacity="0.7" />
        <ellipse cx="110" cy="122" rx="22" ry="40" transform="rotate(-68 110 128)" opacity="0.55" />
        <ellipse cx="110" cy="122" rx="22" ry="40" transform="rotate(68 110 128)" opacity="0.55" />
        <path
          d="M40 132 C70 124 90 136 110 148 C130 136 150 124 180 132 C150 142 130 150 110 154 C90 150 70 142 40 132Z"
          opacity="0.45"
        />
      </g>
    </svg>
  )
}

export function CornerOrnament({ className }) {
  const uid = useId()
  const gold = `${uid}-gold`

  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <GoldPaint id={gold} />
      </defs>
      <g stroke={`url(#${gold})`} strokeWidth="1.6" strokeLinecap="round">
        <path d="M18 18 H96" />
        <path d="M18 18 V96" />
        <path d="M18 34 H58" />
        <path d="M34 18 V58" />
        <path d="M18 18 Q48 38 78 18" opacity="0.8" />
        <path d="M18 18 Q38 48 18 78" opacity="0.8" />
        <circle cx="18" cy="18" r="3.2" fill={`url(#${gold})`} stroke="none" />
        <circle cx="58" cy="18" r="2" fill={`url(#${gold})`} stroke="none" />
        <circle cx="18" cy="58" r="2" fill={`url(#${gold})`} stroke="none" />
      </g>
    </svg>
  )
}

export function GoldDivider({ className }) {
  const uid = useId()
  const gold = `${uid}-gold`

  return (
    <svg
      className={className}
      viewBox="0 0 420 36"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <GoldPaint id={gold} />
      </defs>
      <path
        d="M10 18 H160"
        stroke={`url(#${gold})`}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M260 18 H410"
        stroke={`url(#${gold})`}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M210 6 C216 12 216 12 222 18 C216 24 216 24 210 30 C204 24 204 24 198 18 C204 12 204 12 210 6Z"
        fill={`url(#${gold})`}
      />
      <circle cx="178" cy="18" r="2.4" fill={`url(#${gold})`} />
      <circle cx="242" cy="18" r="2.4" fill={`url(#${gold})`} />
    </svg>
  )
}

export function WeddingArch({ className }) {
  const uid = useId()
  const gold = `${uid}-gold`

  return (
    <svg
      className={className}
      viewBox="0 0 640 760"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <GoldPaint id={gold} />
      </defs>
      <g stroke={`url(#${gold})`} strokeWidth="2.2">
        <path d="M78 730 V250" />
        <path d="M562 730 V250" />
        <path d="M62 730 V268" opacity="0.55" />
        <path d="M578 730 V268" opacity="0.55" />
        <rect x="52" y="250" width="52" height="22" rx="2" />
        <rect x="536" y="250" width="52" height="22" rx="2" />
        <path d="M104 250 C104 96 536 96 536 250" />
        <path d="M128 250 C128 128 512 128 512 250" opacity="0.8" />
        <path d="M150 250 C150 154 490 154 490 250" opacity="0.55" />
        <path d="M320 78 C338 118 360 132 392 142" />
        <path d="M320 78 C302 118 280 132 248 142" />
        {Array.from({ length: 9 }, (_, index) => {
          const x = 150 + index * 42
          return (
            <path
              key={x}
              d={`M${x} 168 C${x + 10} 148 ${x + 20} 148 ${x + 30} 168`}
              opacity="0.85"
            />
          )
        })}
      </g>
      <circle cx="320" cy="92" r="8" fill={`url(#${gold})`} />
    </svg>
  )
}

export function SealMandala({ className }) {
  const uid = useId()
  const gold = `${uid}-gold`

  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <GoldPaint id={gold} />
      </defs>
      <circle cx="60" cy="60" r="56" fill="#6b1428" stroke={`url(#${gold})`} strokeWidth="3" />
      <circle cx="60" cy="60" r="44" fill="none" stroke={`url(#${gold})`} strokeWidth="1.2" />
      {Array.from({ length: 10 }, (_, index) => (
        <ellipse
          key={index}
          cx="60"
          cy="28"
          rx="7"
          ry="16"
          fill={`url(#${gold})`}
          opacity="0.9"
          transform={`rotate(${index * 36} 60 60)`}
        />
      ))}
      <circle cx="60" cy="60" r="12" fill={`url(#${gold})`} />
    </svg>
  )
}

export function Paisley({ className }) {
  const uid = useId()
  const gold = `${uid}-gold`

  return (
    <svg
      className={className}
      viewBox="0 0 80 140"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <GoldPaint id={gold} />
      </defs>
      <path
        d="M42 12 C70 40 78 78 52 110 C36 128 18 120 22 96 C26 74 48 70 44 48 C42 32 30 28 42 12Z"
        stroke={`url(#${gold})`}
        strokeWidth="1.4"
      />
      <path
        d="M46 28 C62 48 64 74 48 96"
        stroke={`url(#${gold})`}
        strokeWidth="1"
        opacity="0.7"
      />
    </svg>
  )
}

export function FloralSpray({ className }) {
  const uid = useId()
  const gold = `${uid}-gold`

  return (
    <svg
      className={className}
      viewBox="0 0 280 90"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <GoldPaint id={gold} />
      </defs>
      <path
        d="M20 62 C70 20 120 80 160 40 C190 16 230 28 260 18"
        stroke={`url(#${gold})`}
        strokeWidth="1.2"
      />
      <circle cx="86" cy="38" r="5" fill={`url(#${gold})`} />
      <circle cx="158" cy="42" r="6" fill={`url(#${gold})`} />
      <circle cx="214" cy="26" r="4" fill={`url(#${gold})`} />
      <ellipse cx="118" cy="54" rx="10" ry="5" fill={`url(#${gold})`} opacity="0.7" />
      <ellipse cx="188" cy="34" rx="9" ry="4.5" fill={`url(#${gold})`} opacity="0.7" />
    </svg>
  )
}

export function RosePetal({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 32"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M12 2 C18 8 22 14 20 22 C18 28 14 31 12 31 C10 31 6 28 4 22 C2 14 6 8 12 2Z"
        fill="currentColor"
      />
    </svg>
  )
}
