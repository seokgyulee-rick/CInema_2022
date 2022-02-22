import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const Hello = () => {
    useEffect(() => {
      console.log("hi");
      return () => console.log("bye");
    }, []);
    return <h1 className={styles.title}>Hello! welcome</h1>;
  };
  const [counter, setCounter] = useState(0);
  const [keyWord, setKeyWord] = useState("");
  const [showing, setShowing] = useState(false);
  const onClick2 = () => setShowing((prev) => !prev);
  const onClick = () => setCounter((prev) => prev + 1);
  console.log("i run all the time");
  const onChange = (event) => setKeyWord(event.target.value);
  const iroo = () => {
    console.log(" i run only once ");
  };
  useEffect(iroo, []);
  useEffect(() => {
    if (keyWord !== "" && keyWord.length > 4) {
      console.log("SEARCH FOR", keyWord);
    }
  }, [keyWord]);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button>
      <input
        value={keyWord}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      ></input>
      <h4>{counter}</h4>
      <Button text="button text" />
      <button onClick={onClick}> click </button>
    </div>
  );
}

export default App;
