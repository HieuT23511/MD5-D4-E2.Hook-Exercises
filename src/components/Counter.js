import UseIncrement from "../hooks/UseIncrement";

export default function Counter({props}) {

    //Cach 1: Khong su dung Hook Custom
    // let [count,setCount] = useState({count1: 0, count2:0})
    // const handleClick = (btn) =>{
    //     setCount(btn === "buttonAdd1" ? {...count,count1: count.count1+1} : {...count, count2: count.count2+2})
    // }
    // return (
    //     <>
    //         <h2>{props}</h2>
    //         <div>
    //             <h4>Count: {count.count1} </h4>
    //             <button onClick={()=>handleClick("buttonAdd1")}>Add 1</button>
    //         </div>
    //         <div>
    //             <h4>Count: {count.count2} </h4>
    //             <button onClick={()=>handleClick("buttonAdd2")}>Add 2</button>
    //         </div>
    //     </>
    // )
    function Counter1 (){
        const [count, increase] = UseIncrement(1);
        return (
            <>
                <div>
                    <div>
                        <h4>Count: {count} </h4>
                        <button onClick={() => increase(1)}>Add 1</button>
                    </div>
                </div>
            </>
        )
    }
    function Counter2 (){
        const [count, increase] = UseIncrement(2);
        return (
            <>
                <div>
                    <div>
                        <h4>Count: {count} </h4>
                        <button onClick={() => increase(2)}>Add 2</button>
                    </div>
                </div>
            </>
        )
    }
    return(
        <>
            <h2>{props}</h2>
            <Counter1/>
            <Counter2/>
        </>
    )

}