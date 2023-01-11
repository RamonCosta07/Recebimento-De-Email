import { useState } from "react";
import "./App.css";
import emailjs from "@emailjs/browser";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [load, setLoad] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos antes de enviar");
      return;
    }
    setLoad(true);
    const templateParams = {
      from_name: name,
      message,
      email,
    };

    emailjs
      .send(
        "service_az6gowo",
        "template_gamaq4u",
        templateParams,
        "4hY3XaFq-09iNJ5RP"
      )
      .then((res) => {
        console.log("Email enviado", res.status, res.text);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => console.log(err))
      .finally(setLoad(false));
  };

  return (
    <div className="container">
      <h1 className="title">Entrar em Contato</h1>

      <form className="form" onSubmit={sendEmail}>
        <input
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        {load === true ? (
          <input className="button" type="submit" value="Enviar" disabled />
        ) : (
          <input className="button" type="submit" value="Enviar" />
        )}
      </form>
    </div>
  );
}

export default App;
