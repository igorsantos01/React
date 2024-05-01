/* eslint-disable react/prop-types */
import styles from "./styles.module.css";

const CommentForm = ({ email, text, handleInput, createComment }) => {
  return (
    <form onSubmit={(ev) => ev.preventDefault()}>
      <h1>Seção de Comentários</h1>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          className={styles.email}
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleInput}
        />
      </div>
      <div>
        <label htmlFor="text">Comentário:</label>
        <textarea
          className={styles.text}
          name="text"
          id="text"
          rows="10"
          value={text}
          onChange={handleInput}
        ></textarea>
      </div>
      <button className={styles.submitBtn} onClick={createComment}>
        Enviar comentário
      </button>
      <hr />
    </form>
  );
};

export default CommentForm;
