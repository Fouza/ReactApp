import axios from "axios";
import { useEffect, useState } from "react";

const IpAdress = () => {

    // https://ipinfo.io

    const [ip, setIp] = useState()
    const [dataPost, setDataPost] = useState()
    const fetchCurrentIpAddress = () => {
        axios.get('https://ipinfo.io').then(response => {
            setTimeout(() => {
                console.log(response)
                setIp(response.data.city)
            }, 3000)
        })
    }

    // const fetchHelloWorld = () => {
        
    // }

    useEffect(() => {
        axios.get('http://localhost:8000/', { test: 1 }).then(response => {
            console.log(response)
        })
    })
    // useEffect(() => {
    //     axios.post('https://jsonplaceholder.typicode.com/posts', {
    //         title: 'foo',
    //         body: 'bar',
    //         userId: 1,
    //     })
    //         .then(response => {
    //             console.log(response)
    //             setDataPost(response.data)
    //         })
    //         .catch(error => console.error('Error:', error));
    // }, []);

    // useEffect(() => {
    //     axios.put('https://jsonplaceholder.typicode.com/posts/1', {
    //         id: 1,
    //         title: 'foo',
    //         body: 'bar',
    //         userId: 1,
    //     })
    //         .then(response => setDataPut(response.data))
    //         .catch(error => console.error('Error:', error));
    // }, []);


    // useEffect(() => {
    //     axios.delete('https://jsonplaceholder.typicode.com/posts/1')
    //         .then(() => setResponse('Deleted'))
    //         .catch(error => console.error('Error:', error));
    // }, []);

    const handleClick = () => {
        fetchCurrentIpAddress()
    }


    return (
        <div>
            <h1>My IP Address</h1>
            <button className="btn btn-teal" onClick={handleClick}>Fetch Ip Address</button>
            {ip && <h2>{ip}</h2>}
        </div>
    )
}

export default IpAdress

// useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         }),
//     })
//         .then(response => response.json())
//         .then(data => setData(data))
//         .catch(error => console.error('Error:', error));
// }, []);