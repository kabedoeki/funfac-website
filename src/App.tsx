import Header from './components/Header.tsx'
import AboutPanel from './components/AboutPanel.tsx'
import QuickAccessPanel from './components/QuickAccessPanel.tsx'
import Footer from './components/Footer.tsx'
import './App.css'

function App() {
  return (
    <div className="landing">
      <Header />
      <main className="landing__columns">
        <AboutPanel />
        <QuickAccessPanel />
      </main>
      <Footer />
    </div>
  )
}

export default App
