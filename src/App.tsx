import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './Layout.tsx'
import LandingPage from './pages/LandingPage.tsx'
import CharacterBioPage from './pages/CharacterBioPage.tsx'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route
            path="characters/dr-morphine"
            element={<CharacterBioPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
