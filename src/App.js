import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import SelectCar from "./components/SelectCar";
import CountDown from "./components/CountDown";
import Counter from "./components/Counter";

function App() {
    let [isShow1, setIsShow1] = useState(true);
    let [isShow2, setIsShow2] = useState(true);
    let [isShow3, setIsShow3] = useState(true);

    return (
        <>
            {/*Exercise 1: */}
            <button onClick={() => setIsShow1(!isShow1)}>ShowE1</button>
            {isShow1 && <SelectCar props={"Exercise 1: "}/>}

            {/*Exercise 2: */}
            <button onClick={() => setIsShow2(!isShow2)}>ShowE2</button>
            {isShow2 && <CountDown props={"Exercise 2: "}/>}

            {/*Exercise 3: */}
            <button onClick={() => setIsShow3(!isShow3)}>ShowE3</button>
            {isShow3 && <Counter props={"Exercise 3: "}/>}
        </>

    );
}

export default App;
