import './AboutPanel.css'

const CREDITS = [
  'LiLaiRa',
  'SmokyJack',
  'Vmod',
  'HappytheMyth',
  'Cessleepless',
  'Vinnybox',
  'FelixVulpes',
  'Scarsji',
  'Doekimakura',
] as const

const CORNER_DOTS = 9

export default function AboutPanel() {
  return (
    <section className="panel">
      <div className="about-panel__accent-bar" />
      <div className="about-panel__body">
        <h2 className="about-panel__heading">About F.U.N. Facility</h2>

        <div className="about-panel__warning" role="alert">
          <div className="about-panel__warning-icon" aria-hidden="true" />
          <p className="about-panel__warning-text">
            CONTAINS ADULT CONTENT AROUND SEX, GORE, EXPERIMENTATION, ETC.{' '}
            <u>DO NOT ENGAGE IF YOU'RE A MINOR/UNCOMFORTABLE.</u>
          </p>
        </div>

        <div className="about-panel__logo placeholder-art">
          <svg
            width="180"
            height="180"
            viewBox="0 0 180 180"
            style={{ opacity: 0.5 }}
            aria-hidden="true"
          >
            <circle
              cx="90"
              cy="90"
              r="62"
              fill="none"
              stroke="var(--text-dim)"
              strokeWidth="6"
            />
            <line
              x1="90"
              y1="90"
              x2="128"
              y2="58"
              stroke="var(--text-dim)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <text
              x="90"
              y="100"
              textAnchor="middle"
              fontFamily="JetBrains Mono"
              fontWeight="800"
              fontSize="30"
              fill="var(--text-dim)"
            >
              FUN
            </text>
          </svg>
        </div>

        <div className="about-panel__columns">
          <div>
            <h3 className="about-panel__column-heading">
              What is F.U.N. facility?
            </h3>
            <p className="about-panel__text">
              A derivation from its parent company, F.E.N. (Find. Ecterminate.
              Neutralize,) the FUN facility hosts only the MOST 'fun' of
              Entities! Join the 'misadventures' of the cast in this closed
              off, isolated facility located somewhere in America.
            </p>

            <h3 className="about-panel__column-heading">DISCLAIMER</h3>
            <p className="about-panel__text">
              We are not, in any shape of form, affiliated with any
              corporation nor anyone outside the list of people mentioned
              below.
            </p>
            <p className="about-panel__text about-panel__text--emphasis">
              Any FunFacility content outside of listed medias are treated as
              NONCANON or NOT APPLICABLE to our current project.
            </p>
          </div>

          <div>
            <h3 className="about-panel__column-heading">Credits</h3>
            <p className="about-panel__credits-intro">
              FunFacility is made real by the following group of friends:
            </p>
            <ul className="about-panel__credits-list">
              {CREDITS.map((name) => (
                <li
                  className="badge badge--outline about-panel__credits-item"
                  key={name}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="about-panel__corner">
          <div className="dot-grid" aria-hidden="true">
            {Array.from({ length: CORNER_DOTS }, (_, index) => (
              <div className="dot-grid__dot" key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
