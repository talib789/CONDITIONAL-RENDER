import { useState } from "react";
import "./styles.css";

const userDetails = {
  name: "Hello Talib !",
  imageUrl: "https://avatars.githubusercontent.com/u/95065465?v=4"
};
const Button = ({ toggleFunc, insideText }) => {
  return <button onClick={toggleFunc}>{insideText}</button>;
};
const Avatar = ({ toggleFuncOne, insideText, className }) => {
  return (
    <>
      <img className={className} src={userDetails.imageUrl} alt="Logo" />
      <br />
      <Button toggleFunc={toggleFuncOne} insideText={insideText} />
    </>
  );
};
const Name = ({ toggleFuncTwo, insideText, text }) => {
  return (
    <>
      <h1>{text ? userDetails.name : ""}</h1>
      <Button toggleFunc={toggleFuncTwo} insideText={insideText} />
    </>
  );
};

export default function App() {
  const [rounded, setRounded] = useState(true);
  const [text, setText] = useState(true);
  const toggleFuncOne = () => {
    setRounded(!rounded);
  };
  const toggleFuncTwo = () => {
    setText(!text);
  };
  return (
    <div className="App">
      <Avatar
        toggleFuncOne={toggleFuncOne}
        insideText={rounded ? "Show Not rounded!" : "Show Rounded!"}
        className={rounded ? "rounded" : "normal"}
      />
      <Name
        toggleFuncTwo={toggleFuncTwo}
        insideText={text ? "Hide Text!" : "Show Text!"}
        text={text}
      />
    </div>
  );
}
