import { useLocation, useSearchParams } from "react-router-dom"


const Contact = () => {

    let { search } = useLocation();
    const query = new URLSearchParams(search);

    console.log(query.get('counter'))
    console.log(query.get('page'))

    return (
        <div>
            <h2>Contact page</h2>
            <h3>Parameters : </h3>
            <p>Counter : {query.get('counter')}</p>
            <p>From page : {query.get('page')}</p>
        </div>
    )
}

export default Contact