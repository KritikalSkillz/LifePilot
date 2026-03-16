export default function App() {
  return (
    <div style={styles.app}>
      
      <main style={styles.main}>
        <h1>Life Pilot</h1>
        <p>Dashboard</p>
      </main>

      <nav style={styles.nav}>
        <button>Tasks</button>
        <button>Quests</button>
        <button>Dashboard</button>
        <button>Social</button>
        <button>Profile</button>
      </nav>

    </div>
  );
}

const styles = {
  app: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    fontFamily: "system-ui"
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  nav: {
    display: "flex",
    justifyContent: "space-around",
    padding: "12px",
    borderTop: "1px solid #ccc"
  }
};
