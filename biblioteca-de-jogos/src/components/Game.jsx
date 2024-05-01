const Game = ({ title, cover, onRemove }) => {
  <div>
    <img src={cover} alt="" />
    <div>
      <h2>{title}</h2>
      <button onClick={onRemove}>Remover</button>
    </div>
  </div>;
};

export default Game;
