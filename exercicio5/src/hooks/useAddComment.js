import { useState } from "react";

function formatData() {
  const data = new Date();
  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0"); // Mês começa de zero
  const ano = data.getFullYear();
  const hora = String(data.getHours()).padStart(2, "0");
  const minuto = String(data.getMinutes()).padStart(2, "0");
  const segundo = String(data.getSeconds()).padStart(2, "0");

  return `Em ${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}

const useAddComment = () => {
  const [comments, setComments] = useState([]);
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  function handleInput(ev) {
    const verification = ev.target.id;
    verification === "email"
      ? setEmail(ev.target.value)
      : setText(ev.target.value);
  }

  function createComment() {
    const nowTime = formatData();
    const newComment = { email, date: nowTime, text };
    setComments([newComment, ...comments]);
    setEmail("");
    setText("");
  }
  return { email, text, handleInput, createComment, comments };
};

export default useAddComment;
