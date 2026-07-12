export interface Chapter {
  id: string
  date: string
  title: string
  description: string
  tags: readonly string[]
}

export interface ComicPage {
  id: string
  chapterId: string
}

export const CHAPTERS: readonly Chapter[] = [
  {
    id: '1',
    date: 'Month 1, 2026',
    title: 'CHAPTER TITLE',
    description: 'Chapter description placeholder.',
    tags: ['Comic'],
  },
  {
    id: '2',
    date: 'May 1 2026',
    title: 'Celebratory Karaoke, (Morphine x Morgane)',
    description:
      "The Entity side hosted a karaoke party to celebrate their milestone on controlling Director's adaptation... and a certain chemistry... bloomed.",
    tags: ['Dr. Morphine', 'Dr. Morgane', 'Comic', 'Romance'],
  },
] as const

export const COMIC_PAGES: readonly ComicPage[] = [
  { id: '1', chapterId: '1' },
  { id: '2', chapterId: '1' },
  { id: '3', chapterId: '1' },
  { id: '4', chapterId: '1' },
  { id: '5', chapterId: '2' },
] as const

export const FIRST_CHAPTER_ID = CHAPTERS[0].id
export const LATEST_CHAPTER_ID = CHAPTERS[CHAPTERS.length - 1].id
