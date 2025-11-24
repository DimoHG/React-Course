import logoImage from "../assets/investment-calculator-logo.png";
import UserInput from "./UserInput";

export default function Header({ onUserInput }) {

  return (
    <header id="header">
      <img src={logoImage} alt="logo" />
      <h1>Investment Calculator</h1>
      <UserInput onUserInput={onUserInput} />
    </header>
  );
}
