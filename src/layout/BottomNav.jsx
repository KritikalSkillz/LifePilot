export default function BottomNav({ setPage }) {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    padding: "16px",
    background: "#ffffff",
    borderTop: "1px solid #e4e7ec",
    position: "fixed",
    bottom: 0,
    width: "100%",
    maxWidth: "500px"
  }

  return (
    <nav style={navStyle}>
      <button onClick={() => setPage("dashboard")}>Dashboard</button>
      <button onClick={() => setPage("tasks")}>Tasks</button>
      <button onClick={() => setPage("quests")}>Quests</button>
      <button onClick={() => setPage("profile")}>Profile</button>
    </nav>
  )
}