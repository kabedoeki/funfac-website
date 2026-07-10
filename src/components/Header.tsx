import './Header.css'

const HEADER_ICONS = ['t', '?', '▶', '☺'] as const

export default function Header() {
  return (
    <header className="header">
      <div className="header__identity">
        <div className="header__mark">
          <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
            <circle
              cx="17"
              cy="17"
              r="13"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2.5"
            />
            <text
              x="17"
              y="21"
              textAnchor="middle"
              fontFamily="JetBrains Mono"
              fontWeight="800"
              fontSize="10"
              fill="var(--accent)"
            >
              FUN
            </text>
          </svg>
        </div>
        <h1 className="header__title">WELCOME, VISITOR.</h1>
      </div>
      <div className="header__icons" aria-hidden="true">
        {HEADER_ICONS.map((icon, index) => (
          <div className="header__icon" key={index}>
            {icon}
          </div>
        ))}
      </div>
    </header>
  )
}
