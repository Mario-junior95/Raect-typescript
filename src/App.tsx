import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import GreetWithOptionType from "./components/GreetWithOptionType";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import LoggedIn from "./components/state/LoggedIn";
import User from "./components/state/User";
import Status from "./components/Status";

const App = () => {
  const personName = {
    first: "Bruce",
    last: "Wayne"
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne"
    },
    {
      first: "Clark",
      last: "kent"
    },
    {
      first: "Pricess",
      last: "Diana"
    }
  ];

  return (
    <div className="App">
      <Greet name="Mario" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <GreetWithOptionType name="Mario" isLoggedIn={true} />
      <Button
        handleClick={(event, id) => {
          console.log("handle Click", event, id);
        }}
      />
      <Input
        value=""
        handleChange={(event) => {
          console.log(event);
        }}
      />
      <Container styles={{ border: "1px black solid", padding: "1rem" }} />
      <LoggedIn />
      <User />
    </div>
  );
};

export default App;
