import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { hideWord, truncateString } from "./helpers/hideWord";
import CustomInputField from "./components/ui/customHTMLElements/CustomInputField";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mt-4 p-4">
      <CustomInputField type="text" label="Name" placeholder="Name" onChange={(e:any) => console.log(e.target.value)} />
      </div>
    </>
  );
}

export default App;
