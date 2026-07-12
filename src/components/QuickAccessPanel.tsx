import "./QuickAccessPanel.css";

interface NavItem {
  label: string;
}

const NAV_TOP: readonly NavItem[] = [
  { label: "EVERYTHING DR. MORPHINE" },
  { label: "CHRONOLOGICAL" },
];

const NAV_BOTTOM: readonly NavItem[] = [
  { label: "FAQ" },
  { label: "CAST" },
  { label: "TIMELINE" },
  { label: "SHITPOST & NONCANON" },
];

const RECENT_POST = {
  date: "MAY 1 2026",
  tags: ["COMIC", "IN PROGRESS"],
  title: "Celebratory Karaoke, (Morphine x Morgane)",
  description:
    "The Entity side hosted a karaoke party to celebrate their milestone on controlling Director's adaptation... and a certain chemistry... bloomed.",
} as const;

const CORNER_DOTS = 9;
const PAGINATION_DOTS = 3;

export default function QuickAccessPanel() {
  return (
    <section className="panel quick-access-panel">
      <div className="quick-access-panel__accent-bar" />
      <div className="quick-access-panel__body">
        <h2 className="quick-access-panel__heading">Quick Access</h2>

        <div className="quick-access-panel__section-header">
          <h3 className="quick-access-panel__section-heading">Most Recent</h3>
          <a className="quick-access-panel__section-link" href="#">
            See From Beginning ↗
          </a>
        </div>

        <article className="quick-access-panel__post">
          <div className="quick-access-panel__post-preview placeholder-art">
            <span className="quick-access-panel__post-preview-label">
              COMIC PAGE PLACEHOLDER
            </span>
          </div>
          <div className="quick-access-panel__post-body">
            <div className="quick-access-panel__post-tags">
              <span className="badge badge--outline">{RECENT_POST.date}</span>
              {RECENT_POST.tags.map((tag) => (
                <span className="badge badge--solid" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <h4 className="quick-access-panel__post-title">
              {RECENT_POST.title}
            </h4>
            <p className="quick-access-panel__post-description">
              {RECENT_POST.description}
            </p>
            <a href="#">Read More ↗</a>

            <div className="quick-access-panel__post-footer">
              <div
                className="quick-access-panel__pagination"
                aria-hidden="true"
              >
                {Array.from({ length: PAGINATION_DOTS }, (_, index) => (
                  <div
                    className={`quick-access-panel__pagination-dot${index === 0 ? " quick-access-panel__pagination-dot--active" : ""}`}
                    key={index}
                  />
                ))}
              </div>
              <div className="dot-grid" aria-hidden="true">
                {Array.from({ length: CORNER_DOTS }, (_, index) => (
                  <div className="dot-grid__dot" key={index} />
                ))}
              </div>
            </div>
          </div>
        </article>

        <nav aria-label="Navigation">
          <div className="quick-access-panel__section-header">
            <h3 className="quick-access-panel__section-heading">Navigation</h3>
            <a className="quick-access-panel__section-link" href="#">
              See All ↗
            </a>
          </div>

          <div className="quick-access-panel__nav-top">
            {NAV_TOP.map(({ label }) => (
              <a
                className="quick-access-panel__nav-tile placeholder-art"
                href="#"
                key={label}
              >
                <div
                  className="quick-access-panel__nav-tile-overlay"
                  aria-hidden="true"
                />
                <span className="quick-access-panel__nav-tile-label">
                  {label}
                </span>
              </a>
            ))}
          </div>

          <div className="quick-access-panel__nav-bottom">
            {NAV_BOTTOM.map(({ label }) => (
              <a
                className="quick-access-panel__nav-tile placeholder-art"
                href="#"
                key={label}
              >
                <div
                  className="quick-access-panel__nav-tile-overlay"
                  aria-hidden="true"
                />
                <span className="quick-access-panel__nav-tile-label">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </section>
  );
}
