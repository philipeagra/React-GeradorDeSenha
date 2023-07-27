import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("Copiar");

  function generate() {
    const characters =
      "'1234567890-=!@#$%¨&*()_+qwertyuiop[{a`sdfghjklç~^]}zxcvbnm,<.>;:/?|";
    const lenghtPassword = 12;
    let newPassword = "";
    for (let i = 0; i < lenghtPassword; i++) {
      const position = Math.floor(Math.random() * characters.length);
      newPassword += characters[position];
    }
    setPassword(newPassword);
    setCopyText("Copiar");
  }

  function copyToClipboard() {
    window.navigator.clipboard.writeText(password);
    setCopyText("Copiado!");
  }

  return (
    <div className="app">
      <h1>Gerador de senhas</h1>
      <div>
        <label htmlFor="passwordSize">Tamanho:</label>
        <input type="number" id="passwordSize" min={1} />
      </div>
      <button onClick={generate}>Gerar a senha</button>
      <button onClick={copyToClipboard}>{copyText}</button>
      <div>{password}</div>
    </div>
  );
}

export default App;
