import { useEffect, useState } from "react";
import "./App.css";
import Heading from "./Components/Heading";
import Logo from "./Components/Logo";
import ReactLogo from "./assets/react.svg";
import Button from "./Components/Button";
import Select from "./Components/Select";
import FeatchAPI from "./Components/FeatchAPI";

function App() {
  const handleAlert = () => {
    alert("Button clicked");
  };

  const handleSubmit = () => {
    console.log("Submite button clicked");
  };

  const options = [
    {
      label: "Kozhikode",
      value: "koz",
    },
    {
      label: "Kannur",
      value: "knr",
    },
    {
      label: "Eranakulam",
      value: "enr",
    },
  ];

  const name = <h1>my name is Abinand</h1>;

  const [count, setCount] = useState(0); 

  const Add = () => {
    const sum = count + 1;

    setCount(sum);
  };

  const Sub = () => {
    const sum = count - 1;
    setCount(sum);
  };

 const [city,setCity] = useState("Kannur");
 const [address, setAdress] = useState({
  state : "Kerala",
  country : "India"
 })

const [text,setText] = useState("")

useEffect(() => {
  console.log("component is loading");
  // alert("component loading") 

  return () => {
    console.log("compount unmounting");
    
  }

},[count]);


  return (
    <>
    {address.state} <br />

    {city} <br />

      {count}

      <button onClick={Add}>Add</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={Sub}>Sub</button>

      <input 
      type="text" 
      value={text}
      onChange={(e) => setText(e.target.value)}
       />

      {name}

      <Button text="click me" className="btn" handleClick={handleAlert} />
      <Button text="submit me" className="btn" handleClick={handleSubmit} />
      <Heading heading_text="React.js" name="Abinand.np" age={25} />
      <Logo url="favicon.svg" />
      <Logo url={ReactLogo} />
      <Select label="Select City" options={options} />

      <FeatchAPI />
    </>
  );
}

export default App;
