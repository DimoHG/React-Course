import Header from "./Header";
import Results from "./Results";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleUserInput(input) {
    setUserInput(input);
  }

  return (
    <>
      <Header onUserInput={handleUserInput} />
      <Results userInput={userInput} />
    </>
  );
}

export default App;
