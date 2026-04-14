const tools = [
  {
    title: "Aadhaar Card Cutter",
    desc: "Cut front and back of Aadhaar card",
  },
  {
    title: "Resume Generator",
    desc: "Create PDF resume easily",
  },
  {
    title: "Passport Photo Maker",
    desc: "Make passport size photos",
  },
  {
    title: "Image Tools",
    desc: "Resize, crop, compress images",
  },
];

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      
      {/* Sidebar */}
      <div style={{
        width: 250,
        background: "#111",
        color: "#fff",
        padding: 20,
        height: "100vh"
      }}>
        <h2>Tools</h2>
        <p>Dashboard</p>

        <ul style={{ marginTop: 20 }}>
          <li>Dashboard</li>
          <li>All Tools</li>
          <li>Aadhaar</li>
          <li>Resume</li>
          <li>Photo</li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: 20 }}>
        <h1>All Tools</h1>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 20
        }}>
          {tools.map((tool) => (
            <div key={tool.title} style={{
              border: "1px solid #ddd",
              padding: 20,
              borderRadius: 10
            }}>
              <h3>{tool.title}</h3>
              <p>{tool.desc}</p>
              <button>Use Tool</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
