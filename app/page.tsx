export default function Home() {
  return (
    <main style={{
      padding: 20,
      fontFamily: "sans-serif"
    }}>
      <h1>AI 心动模拟器</h1>

      <div style={{
        marginTop: 20,
        padding: 16,
        borderRadius: 12,
        background: "#f5f5f5"
      }}>
        男主：今天终于等到你了。
      </div>

      <button style={{
        marginTop: 20,
        padding: "12px 20px",
        borderRadius: 10,
        border: "none",
        background: "black",
        color: "white"
      }}>
        继续剧情
      </button>
    </main>
  )
}
