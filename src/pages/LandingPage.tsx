import Header from '../components/Header.tsx'
import AboutPanel from '../components/AboutPanel.tsx'
import QuickAccessPanel from '../components/QuickAccessPanel.tsx'
import WarningBanner from '../components/WarningBanner.tsx'

export default function LandingPage() {
  return (
    <>
      <Header />
      <main className="landing__columns">
        <WarningBanner className="landing__mobile-warning" />
        <AboutPanel />
        <QuickAccessPanel />
      </main>
    </>
  )
}
