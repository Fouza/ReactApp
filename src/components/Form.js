import React, { useState, useEffect } from 'react';
import './Form.css'

const Form = () => {


    const [formData, setFormData] = useState({
        firstName: '',
        age: '0',
        email: ''
    })

    const [liClass, setLiClass] = useState('greenc')

    const handleChange = (value, name) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    useEffect(() => {
        if (parseInt(formData.age) > 20) {
            setLiClass('redc')
        } else {
            setLiClass('greenc')
        }
    }, [formData.age])
    return (
        <div>
            <input type='text' name='firstName' placeholder='First Name' value={formData.firstName} onChange={(event) => handleChange(event.target.value, 'firstName')} />
            <input type='number' name='age' placeholder='Age' value={formData.age} onChange={(event) => handleChange(event.target.value, 'age')} />
            <input type='email' name='email' placeholder='Email' value={formData.email} onChange={(event) => handleChange(event.target.value, 'email')} />



            <ul>
                <li>{formData.firstName}</li>
                <li className={liClass}>{formData.age}</li>
                <li>{formData.email}</li>
            </ul>
        </div>
    );
}

export default Form;