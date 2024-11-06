import { useState } from "react";

const Inpt = () => {
    const [input, setInput] = useState("");
    const changeInput = (event) => {
        setInput(event.target.value)
    };
    return (
        <div>
            <input type="text" onChange={changeInput} placeholder="write something" />
            <p>You wrote: {input} </p>
        </div>
    );
}

export default Inpt;

// Create a new component
// Create two buttons  Hide/Show
// By clicking on either of them, they either hide or show the component
// Condition: Use only one handle function