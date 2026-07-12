import { Outlet } from 'react-router'
import EntryDialog from './components/EntryDialog.tsx'
import Footer from './components/Footer.tsx'
import './App.css'

export default function Layout() {
  return (
    <div className="landing">
      <EntryDialog />
      <Outlet />
      <Footer />
    </div>
  )
}
