import Card from "./components/Card";
import starwars from "./assets/starwars.jpg";
import esb from "./assets/esb.jpg";
import rotj from "./assets/rotj.jpg";
const App = () => {
  return (
    <>
      <Card img={starwars} title={"Pôster: Star Wars(1977)"} />
      <Card img={esb} title={"Pôster: Empire Strikes Back(1980)"} />
      <Card img={rotj} title={"Pôster: Return Of The Jedi(1983)"} />
    </>
  );
};

export default App;
