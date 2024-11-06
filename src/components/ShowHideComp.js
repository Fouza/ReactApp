

import { useEffect, useState } from "react";

const ShowHideComp = (props) => {
    const [visible, setVisible] = useState(true);
    const [counter, setCounter] = useState(props.init_count)

    const handleChange = (v) => {
        setVisible(v);
    };

    const handleClick = () => {
        setCounter(counter + 1)
        // console.log(`Clicked ${count} times`)
    }

    //First parameter is the function containing the actions you want to do
    //Second parameter is the dependencies

    useEffect(() => {
        console.log('MOUNTED')
    }, [])
    //When the dependency array is empty, useEffect only triggers on the mounting phase

    //Updating phase
    useEffect(() => {
        console.log("Visible state has been updated")
    }, [visible, counter, props.init_count])
    //When we want the useeffect to trigger depending on a state
    //We put that state inside the dependency array

    //Unmounting
    useEffect(() => {
        //cleanup
        return () => {
            console.log("Unmounted")
            alert("Are you sure you want to leave ?");
        }
    }, [])

    return (
        <div>
            <p>
                <button onClick={() => handleChange(true)}>Show</button>
            </p>
            <button onClick={() => handleChange(false)}>Hide</button>
            {/* {visible ? <p>Click "Hide" to hide this content</p> : <></>} */}
            {visible && <p>Click "Hide" to hide this content</p>}

            <button onClick={handleClick}>Click me</button>
            <p>{counter}</p>
        </div>
    );
};

export default ShowHideComp;