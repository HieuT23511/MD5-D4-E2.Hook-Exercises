import {useState} from "react";

export default function UseIncrement(addAmount){
    let [count, setCount] = useState(0)
   let increase = (addAmount) => {
        setCount(count + addAmount)
   }
   return [count, increase]
}