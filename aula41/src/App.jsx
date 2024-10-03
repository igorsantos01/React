import UserInfo from "./components/UserInfo";
import UserContext from "./contexts/UserContext";

const App = () => {
  const user = {
    name: "João",
    email: "joão@email.com",
  };
  return (
    <UserContext.Provider value={user}>
      <h1>Usando Context</h1>
      <UserInfo />
    </UserContext.Provider>
  );
};

export default App;
