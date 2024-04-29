import StarWars from "../public/starwars.jpg";
import styles from "../styles/Card.module.css";
const Card = () => {
  return (
    <article className={styles.card}>
      <img src={StarWars} alt="Poster Star Wars" className={styles.image} />
      <div className={styles.text}>
        <h1 style={{ fontSize: "1.6rem" }}>Pôster: Star Wars (1977)</h1>
        <p style={{ fontSize: "1rem" }}>
          Um pôster decorativo épico do filme Star Wars, com moldura de MDF e
          tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de
          todos os tempos. Este clássico pôster trará aventura, nostalgia e a
          magia de Star Wars para qualquer lugar que você decidir pendurar. Não
          perca a chance de adicionar essa linda memória ao seu acervo!
        </p>
        <button className={styles.button}>Comprar agora</button>
      </div>
    </article>
  );
};

export default Card;
