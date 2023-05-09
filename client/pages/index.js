import styles from '../styles/Home.module.css'
import Nav from '../components/nav/Nav'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { useState } from 'react'

export default function Home() {
  const [promptMessage, setPromptMessage] = useState("");
  const [result, setResult] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: promptMessage })
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with a status ${response.status}`)
      }
      
      setResult(data.result);
      setPromptMessage("");
    } catch ( error ) {
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div className={styles.container}>
      <Nav />
      <Header />
      <h2>Send a message</h2>
      <form onSubmit={onSubmit}>
          <input
            type="text"
            name="prompt"
            placeholder="Enter a message"
            value={promptMessage}
            onChange={(e) => setPromptMessage(e.target.value)}
          />
          <input type="submit" value="Generate message" />
      </form>
      <div className={styles.result}>{result}</div>
      <Footer />
    </div>

  )
}
