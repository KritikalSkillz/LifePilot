export default function Header({ title }) {
  return (
    <header
      style={{
        padding: "20px",
        fontSize: "24px",
        fontWeight: "600",
        background: "#ffffff",
        borderBottom: "1px solid #e4e7ec"
      }}
    >
      {title}
    </header>
  )
}