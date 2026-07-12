import { useEffect } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router'
import Header from '../components/Header.tsx'
import { CHAPTERS, COMIC_PAGES, LATEST_CHAPTER_ID } from '../data/comicPages.ts'
import './ComicReaderPage.css'

function ComicPagePlaceholder() {
  return (
    <div className="comic-reader__page-placeholder placeholder-art">
      <span>COMIC PAGE PLACEHOLDER</span>
    </div>
  )
}

export default function ComicReaderPage() {
  const { chapterId } = useParams<{ chapterId: string }>()

  if (!chapterId || !CHAPTERS.some((chapter) => chapter.id === chapterId)) {
    return <Navigate to={`/comics/${LATEST_CHAPTER_ID}`} replace />
  }

  return <ComicReader chapterId={chapterId} />
}

function ComicReader({ chapterId }: { chapterId: string }) {
  const navigate = useNavigate()

  const chapterIndex = CHAPTERS.findIndex((chapter) => chapter.id === chapterId)
  const chapter = CHAPTERS[chapterIndex]
  const prevChapter = CHAPTERS[chapterIndex - 1]
  const nextChapter = CHAPTERS[chapterIndex + 1]
  const chapterPages = COMIC_PAGES.filter((page) => page.chapterId === chapterId)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [chapterId])

  function goToChapter(target: typeof chapter | undefined) {
    if (!target) return
    navigate(`/comics/${target.id}`)
  }

  return (
    <>
      <Header minimal />
      <div className="comic-reader">
        <button
          type="button"
          className="comic-reader__back"
          aria-label="Back"
          onClick={() => window.history.back()}
        >
          ←
        </button>

        <aside className="comic-reader__info panel">
          <div className="comic-reader__info-body">
            <span className="badge badge--outline comic-reader__date">
              {chapter.date}
            </span>
            <h2 className="comic-reader__title">{chapter.title}</h2>
            <p className="comic-reader__description">{chapter.description}</p>
            <div className="comic-reader__scroll-hint">
              Scroll down
              <br />
              to read.
              <br />↓
            </div>
          </div>
        </aside>

        <div className="comic-reader__feed">
          {chapterPages.map((page, index) => {
            const isBoundary = index === 0 || index === chapterPages.length - 1
            return (
              <section
                key={page.id}
                className={`comic-reader__page${isBoundary ? ' comic-reader__page--auto' : ''}`}
              >
                <ComicPagePlaceholder />
              </section>
            )
          })}
        </div>

        <aside className="comic-reader__tags panel">
          <div className="comic-reader__tags-body">
            <h2 className="comic-reader__tags-heading">Tags</h2>
            <div className="comic-reader__tags-list">
              {chapter.tags.map((tag) => (
                <span className="badge badge--outline comic-reader__tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="comic-reader__nav-buttons">
              <button
                type="button"
                className="comic-reader__nav-button"
                disabled={!prevChapter}
                onClick={() => goToChapter(prevChapter)}
              >
                ← Prev Chapter
              </button>
              <button
                type="button"
                className="comic-reader__nav-button"
                disabled={!nextChapter}
                onClick={() => goToChapter(nextChapter)}
              >
                Next Chapter →
              </button>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
