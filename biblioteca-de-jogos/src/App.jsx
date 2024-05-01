import Game from "./components/Game";
import NewGameForm from "./components/NewGameForm";
import useGameCollection from "./hooks/useGameCollection";

const App = () => {
  const { games, addGames, removeGame } = useGameCollection();
  return (
    <div id="app">
      <h1>Biblioteca de Jogos</h1>
      <NewGameForm addGames={addGames} />
      <div className="games">
        {games.length > 0 ? (
          games.map((game) => (
            <Game
              key={game.id}
              title={game.title}
              cover={game.cover}
              onRemove={() => removeGame(game.id)}
            />
          ))
        ) : (
          <h2>Adicione os jogos</h2>
        )}
      </div>
    </div>
  );
};

export default App;
