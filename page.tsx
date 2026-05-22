"use client";

import { useState } from "react";

const characters = [
  {
    name: "金泰亨",
    personality: "敏感、慢热、艺术感强",
    affection: 35
  },
  {
    name: "田柾国",
    personality: "直球、黏人、占有欲强",
    affection: 48
  },
  {
    name: "闵玧其",
    personality: "冷淡、克制、细心",
    affection: 26
  }
];

const scenes = [
  "厨房一起做饭",
  "深夜阳台聊天",
  "超市采购",
  "雨夜送伞",
  "心动短信时间"
];

export default function Home() {

  const [messages, setMessages] = useState([
    {
      sender: "系统",
      text: "欢迎进入《心动的信号》小屋。"
    }
  ]);

  const [input, setInput] = useState("");

  const [character, setCharacter] = useState(characters[0]);

  function sendMessage() {

    if (!input) return;

    const userMessage = {
      sender: "你",
      text: input
    };

    const aiMessage = {
      sender: character.name,
      text: generateReply(input)
    };

    setMessages([
      ...messages,
      userMessage,
      aiMessage
    ]);

    setInput("");
  }

  function generateReply(input: string) {

    const replies = [
      "你刚刚的话让我有点在意。",
      "今天和你待在一起很舒服。",
      "你是不是故意逗我？",
      "刚刚那一瞬间有点心动。",
      "下次还想和你一起。"
    ];

    return replies[
      Math.floor(Math.random() * replies.length)
    ];
  }

  function nextScene() {

    const randomScene =
      scenes[Math.floor(Math.random() * scenes.length)];

    const systemMessage = {
      sender: "节目组",
      text: `【新剧情】${randomScene}`
    };

    setMessages([
      ...messages,
      systemMessage
    ]);
  }

  return (
    <main style={{
      maxWidth: 500,
      margin: "0 auto",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      background: "#fff"
    }}>

      <div style={{
        padding: 16,
        borderBottom: "1px solid #eee",
        background: "#fafafa"
      }}>
        <h2 style={{margin: 0}}>🧡 AI 心动模拟器</h2>

        <p style={{margin: "8px 0"}}>
          当前男主：{character.name}
        </p>

        <p style={{margin: 0}}>
          ❤️ 心动值：{character.affection}
        </p>
      </div>

      <div style={{
        flex: 1,
        overflowY: "auto",
        padding: 16
      }}>

        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              marginBottom: 16,
              textAlign:
                msg.sender === "你"
                  ? "right"
                  : "left"
            }}
          >
            <div style={{
              fontSize: 12,
              color: "#888",
              marginBottom: 4
            }}>
              {msg.sender}
            </div>

            <div style={{
              display: "inline-block",
              background:
                msg.sender === "你"
                  ? "#95ec69"
                  : "#f1f1f1",
              padding: 12,
              borderRadius: 12,
              maxWidth: "80%"
            }}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        padding: 16,
        borderTop: "1px solid #eee"
      }}>

        <button
          onClick={nextScene}
          style={{
            width: "100%",
            padding: 12,
            marginBottom: 12,
            border: "none",
            borderRadius: 12
          }}
        >
          推进剧情
        </button>

        <div style={{
          display: "flex",
          gap: 8
        }}>
          <input
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            placeholder="发送消息..."
            style={{
              flex: 1,
              padding: 12,
              borderRadius: 12,
              border: "1px solid #ddd"
            }}
          />

          <button
            onClick={sendMessage}
            style={{
              padding: "0 20px",
              border: "none",
              borderRadius: 12
            }}
          >
            发送
          </button>
        </div>
      </div>
    </main>
  );
}