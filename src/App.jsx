import { useState } from "react"
import AppShell from "./components/AppShell"
import "./styles/global.css"

export default function App() {
  const [page, setPage] = useState("dashboard")

  const renderPage = () => {
    if (page === "dashboard") return <div>Dashboard</div>
    if (page === "tasks") return <div>Tasks</div>
    if (page === "quests") return <div>Quests</div>
    if (page === "profile") return <div>Profile</div>
  }

  return (
    <AppShell title="Life Pilot" setPage={setPage}>
      {renderPage()}
    </AppShell>
  )
}