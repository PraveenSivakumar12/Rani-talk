import { useState } from "react";

function Courses(props) {
    const [num,setNum] = useState(false);
    function purchased(){

        setNum(true)
    }
    return (
        <div className="style">
            <img src={props.image} alt="" />
            <p>{props.name}</p>
            <h2>{props.price}</h2>
            <button onClick={purchased}>Buy now</button>
            <p>{num ? "Already purchased" : "Want to purchase"}</p>
        </div>
    );

}

export default Courses;