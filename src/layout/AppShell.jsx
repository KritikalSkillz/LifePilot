import { useState } from "react"

import Dashboard from "../pages/Dashboard"
import Tasks from "../pages/Tasks"
import Quests from "../pages/Quests"
import Profile from "../pages/Profile"

export default function AppShell() {
  const [page, setPage] = useState("dashboard")

  const renderPage = () => {
    if (page === "dashboard") return <Dashboard />
    if (page === "tasks") return <Tasks />
    if (page === "quests") return <Quests />
    if (page === "profile") return <Profile />
  }

  return (
    <div>

      <header>
        <h1>Life Pilot</h1>
        <p>Header Area</p>
      </header>

      <main>
        {renderPage()}
      </main>

      <footer>
        <button onClick={() => setPage("dashboard")}>Dashboard</button>
        <button onClick={() => setPage("tasks")}>Tasks</button>
        <button onClick={() => setPage("quests")}>Quests</button>
        <button onClick={() => setPage("profile")}>Profile</button>
      </footer>

    </div>
  )
}