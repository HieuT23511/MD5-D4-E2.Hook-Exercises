import {useState} from "react";

export default function SelectCar({props}) {
    let [car, setCar] = useState({
        name: "",
        color: ""
    })
    let [isShow,setIsShow] = useState(false);
    const handleChange = (e) => {
        setCar({...car, [e.target.name]: e.target.value})
    }
    const handleClick = ()=>{
        setIsShow(!isShow)
    }

    return (
        <>
            <h2>{props}</h2>
            <div>
                <h3> Select Your Car</h3>
                <table>
                    <tr>
                        <td colSpan={2}>Select a car:</td>
                        <td colSpan={2}><select name="name" id="car" onChange={handleChange}>
                            <option value="">-- Pick a car --</option>
                            <option value="Mercedes">Mercedes</option>
                            <option value="Camry">Camry</option>
                            <option value="Lexus">Lexus</option>
                        </select></td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Select color:</td>
                        <td colSpan={2}><select name="color" id="color" onChange={handleChange}>
                            <option value="">-- Pick color --</option>
                            <option value="Red">Red</option>
                            <option value="Blue">Blue</option>
                            <option value="Green">Green</option>
                        </select></td>
                    </tr>
                    <tr>
                        <td colSpan={8}>
                            <button onClick={handleClick}>Select</button>
                            {isShow && <h4>You selected a {car.color} - {car.name} </h4>}
                        </td>
                    </tr>
                </table>
            </div>
        </>
    )
}