import { Navigate, Route, Routes } from 'react-router-dom'
import Shell from './layout/Shell'
import Home from './pages/Home'
import {
  AccountPage,
  AlbumsPage,
  AssistantPage,
  CommunityPage,
  CompetitionsPage,
  DirectoryPage,
  EducationPage,
  EventsPage,
  HeritagePage,
  MarketPage,
  NewsPage,
} from './pages/Lists'

export default function App() {
  return (
    <Routes>
      <Route element={<Shell />}>
        <Route index element={<Home />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="albums" element={<AlbumsPage />} />
        <Route path="market" element={<MarketPage />} />
        <Route path="community" element={<CommunityPage />} />
        <Route path="competitions" element={<CompetitionsPage />} />
        <Route path="heritage" element={<HeritagePage />} />
        <Route path="education" element={<EducationPage />} />
        <Route path="directory" element={<DirectoryPage />} />
        <Route path="assistant" element={<AssistantPage />} />
        <Route path="account" element={<AccountPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
