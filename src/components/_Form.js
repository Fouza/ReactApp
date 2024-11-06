import './Form.css'

const Form = () => {
    //use one state and one handler only


    //Create a useeffect that listens to the change in age
    //If the age is bigger than 20 turn the li into red
    //If not turn it into green


    //class="true"
    return (
        <div>
            {/* I want an input text to fill the name */}
            <input type='text' name='firstName' placeholder='First Name' />
            {/* I want an input to fill the age */}
            <input type='number' name='age' placeholder='Age' />
            {/* An input to fill the email */}
            <input type='email' name='email' placeholder='Email' />

            {/* Show text here but this time create a component 
                that we give a prop named text when we call it
                and it will show it in a title component
             */}


            <ul>
                {/* Show the values using li elements */}
            </ul>
        </div>
    )
}

export default Form