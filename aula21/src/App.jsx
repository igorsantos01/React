import igor from "./assets/profilepicture.jpg";
import ProfileCard from "./components/ProfileCard";
const App = () => {
  return (
    <ProfileCard
      imgProfile={igor}
      name={"Igor Santos"}
      biography={"FullStack JavaScript Developer Student"}
      phone={"+55 (31)98765-4321"}
      email={"031igorsantos@gmail.com"}
    />
  );
};

export default App;
