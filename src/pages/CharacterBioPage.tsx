import { Link } from "react-router";
import Header from "../components/Header.tsx";
import drMorphinePortrait from "../assets/dr-morphine.png";
import "./CharacterBioPage.css";

const BIO = {
  intro:
    "Contained within F.U.N facility, currently held in captivity under Director's supervision.",
  classification: "B, C",
  dangerLevel: "Vigil (keep watch/Moderate danger)",
  arrival:
    "The Alien arrived to the facility within an organic spacecraft. The spacecraft was separated, analyzed and is currently held in it's own containment chamber. Regularly fed by the staff. The alien is to remain separated from it or any illegal equipment previously found inside the creature.",
  confiscation:
    "Multiple tools, weapons and illegal substances were confiscated under the judgement of Dr. Morgane.",
} as const;

const STORY_PLACEHOLDER_COUNT = 12;
const STORIES = Array.from({ length: STORY_PLACEHOLDER_COUNT }, () => ({
  tag: "Comic",
  date: "Month 99, 2026",
  title: "RP TITLE",
}));

const CORNER_DOTS = 9;

export default function CharacterBioPage() {
  return (
    <>
      <Header title="Everything Dr. Morphine <3" />
      <main className="character-bio-page__row">
        <Link to="/" className="character-bio-page__back" aria-label="Back">
          ←
        </Link>

        <section className="panel character-bio-page">
          <div className="character-bio-page__accent-bar" />

          <div className="character-bio-page__grid">
            <div className="character-bio-page__portrait-container">
              <div className="character-bio-page__portrait">
                <img src={drMorphinePortrait} alt="Dr. Morphine" />
              </div>
              <a
                className="character-bio-page__ref-link"
                href="https://toyhou.se/"
                target="_blank"
                rel="noreferrer"
              >
                Toyhou.se
              </a>
            </div>

            <div>
              <h2 className="character-bio-page__heading">Bio</h2>
              <div className="character-bio-page__bio-text">
                <p>{BIO.intro}</p>
                <p className="character-bio-page__bio-meta">
                  CLASIFICATION: {BIO.classification}
                  <br />
                  DANGER LEVEL: {BIO.dangerLevel}
                </p>
                <p>{BIO.arrival}</p>
                <p>{BIO.confiscation}</p>
              </div>
            </div>

            <div>
              <div className="character-bio-page__stories-header">
                <h2 className="character-bio-page__heading character-bio-page__heading--tight">
                  Stories
                </h2>
                <p className="character-bio-page__stories-subheading">
                  (Sorted from: Recent to Oldest)
                </p>
              </div>

              <div className="character-bio-page__stories-wrap">
                <div className="character-bio-page__stories-grid">
                  {STORIES.map((story, index) => (
                    <div
                      className="character-bio-page__story-card placeholder-art"
                      key={index}
                    >
                      <span className="character-bio-page__story-tag">
                        {story.tag}
                      </span>
                      <div
                        className="character-bio-page__story-scrim"
                        aria-hidden="true"
                      />
                      <div className="character-bio-page__story-meta">
                        <div className="character-bio-page__story-date">
                          {story.date}
                        </div>
                        <div className="character-bio-page__story-title">
                          {story.title}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="character-bio-page__corner">
            <div className="dot-grid" aria-hidden="true">
              {Array.from({ length: CORNER_DOTS }, (_, index) => (
                <div className="dot-grid__dot" key={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
