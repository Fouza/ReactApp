import { useState } from "react"
import { Link } from "react-router-dom"
// hooks

const Counter = (props) => {
    // console.log(props)
    const [count, setCount] = useState(props.init_count) //When creating a state
    // The component knows that the state is something propert to itself
    // Meaning that any changes to the state will trigger a re-render of the component

    const handleClick = () => {
        setCount(count + 1)
        // console.log(`Clicked ${count} times`)
    }

    // console.log(count) This happens at every render of the component

    return (
        <div>
            <button onClick={handleClick}>Click me</button>
            <p>{count}</p>
            <Link to={`/contact?counter=${count}&page=area`}>Take this counter to contact page</Link>
        </div>
    )
}

export default Counter


//Create a new component
//This component will have an input
//Store the changes of the input inside a state
//Display the state in a HTNL Element like we did in this component