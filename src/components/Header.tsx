import { useEffect, useRef, useState } from 'react'
import './Header.css'

const HEADER_ACTIONS = [
  { glyph: 't', label: 'Text Size' },
  { glyph: '?', label: 'FAQ' },
  { glyph: '▶', label: 'Latest Episode' },
  { glyph: '☺', label: 'Mood Toggle' },
] as const

interface HeaderProps {
  title?: string
}

export default function Header({ title = 'WELCOME, VISITOR.' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const actionsRef = useRef<HTMLDivElement>(null)
  const firstActionRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isMenuOpen) return

    firstActionRef.current?.focus()

    function handlePointerDown(event: PointerEvent) {
      const target = event.target as Node
      if (
        actionsRef.current?.contains(target) ||
        toggleRef.current?.contains(target)
      ) {
        return
      }
      setIsMenuOpen(false)
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        toggleRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

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
        <h1 className="header__title">{title}</h1>
      </div>

      <button
        type="button"
        className="header__menu-toggle"
        aria-expanded={isMenuOpen}
        aria-controls="header-actions"
        aria-haspopup="true"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        ref={toggleRef}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>

      <div
        className={`header__actions${isMenuOpen ? ' header__actions--open' : ''}`}
        id="header-actions"
        ref={actionsRef}
      >
        {HEADER_ACTIONS.map(({ glyph, label }, index) => (
          <button
            type="button"
            className="header__action"
            key={label}
            ref={index === 0 ? firstActionRef : undefined}
          >
            <span className="header__action-glyph" aria-hidden="true">
              {glyph}
            </span>
            <span className="header__action-label">{label}</span>
          </button>
        ))}
      </div>
    </header>
  )
}
