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
import User1 from "./components/state/User1";
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
      <hr />
      <Person name={personName} />
      <hr />
      <PersonList names={nameList} />
      <hr />
      <Status status="success" />
      <hr />
      <Heading>Placeholder Text</Heading>
      <hr />
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <hr />
      <GreetWithOptionType name="Mario" isLoggedIn={true} />
      <hr />
      <Button
        handleClick={(event, id) => {
          console.log("handle Click", event, id);
        }}
      />
      <hr />
      <Input
        value=""
        handleChange={(event) => {
          console.log(event);
        }}
      />
      <hr />
      <Container styles={{ border: "1px black solid", padding: "1rem" }} />
      <hr />
      <LoggedIn />
      <hr />
      <User />
      <hr />
      <User1 />
    </div>
  );
};

export default App;
