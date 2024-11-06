import { useEffect } from "react"
import Counter from "../../components/Counter/Counter"


const Area = () => {

    const myFunc = () => {
        let promise = new Promise(function (resolve) {
            setTimeout(() => {
                resolve('THIS IS THE RESPONSE MESSAGE')
            }, 5000)
        })
        return promise
    }


    const obj1 = {
        firstName: 'test',
        a: 1,
        b: 2
    }

    const obj2 = {
        lastName: 'last'
    }

    const obj = {
        ...obj1,
        ...obj2
    }
    console.log(obj1, obj2, obj)

    // useEffect(async () => {
    //     myFunc().then(res => {
    //         console.log(res)
    //     })
    // }, [])

    return (
        <div>
            <Counter init_count={0} />
        </div>
    )
}


export default Area