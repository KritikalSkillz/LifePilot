import Header from "./Header"
import BottomNav from "./BottomNav"

export default function AppShell({ title, children, setPage }) {
  return (
    <div className="app-container">
      <Header title={title} />

      <div className="content">
        {children}
      </div>

      <BottomNav setPage={setPage} />
    </div>
  )
}