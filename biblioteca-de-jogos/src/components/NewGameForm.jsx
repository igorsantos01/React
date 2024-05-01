import { useState } from "react";
import TextInput from "./TextInput";

const NewGameForm = ({ addGames }) => {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");
  const handleSubmit = (ev) => {
    ev.preventDefault();
    addGames({ title, cover });
    setTitle("");
    setCover("");
  };

  <form onSubmit={handleSubmit}>
    <TextInput id="title" label="Título: " value={title} setValue={setTitle} />
    <TextInput id="cover" label="Capa: " value={cover} setValue={setCover} />
    <button>Adicionar à biblioteca</button>
  </form>;
};

export default NewGameForm;
