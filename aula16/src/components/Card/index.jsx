/* eslint-disable react/prop-types */
import Button from "../Button";
import styles from "../Card/styles.module.css";

const Card = ({ title, img }) => {
  return (
    <article className={styles.card}>
      <img src={img} alt={title} className={styles.image} />
      <div className={styles.text}>
        <h1 style={{ fontSize: "1.6rem" }}>{title}</h1>
        <p style={{ fontSize: "1rem" }}>
          Um pôster decorativo épico do filme Star Wars, com moldura de MDF e
          tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de
          todos os tempos. Este clássico pôster trará aventura, nostalgia e a
          magia de Star Wars para qualquer lugar que você decidir pendurar. Não
          perca a chance de adicionar essa linda memória ao seu acervo!
        </p>
        <Button text={"Comprar Agora"} />
      </div>
    </article>
  );
};

export default Card;
