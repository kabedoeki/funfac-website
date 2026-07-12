import Header from './components/Header.tsx'
import AboutPanel from './components/AboutPanel.tsx'
import QuickAccessPanel from './components/QuickAccessPanel.tsx'
import WarningBanner from './components/WarningBanner.tsx'
import Footer from './components/Footer.tsx'
import EntryDialog from './components/EntryDialog.tsx'
import './App.css'

function App() {
  return (
    <div className="landing">
      <EntryDialog />
      <Header />
      <main className="landing__columns">
        <WarningBanner className="landing__mobile-warning" />
        <AboutPanel />
        <QuickAccessPanel />
      </main>
      <Footer />
    </div>
  )
}

export default App
