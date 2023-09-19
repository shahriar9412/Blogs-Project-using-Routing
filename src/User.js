import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const User = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        setSearchParams({ name: name, age: age })
    }
    return (
        <div>
            <h1>User</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='name'
                    value={name}
                    onChange={e => {
                        setName(e.target.value)
                    }}
                />
                <input
                    type='text'
                    placeholder='age'
                    value={age}
                    onChange={e => {
                        setAge(e.target.value)
                    }}
                />
                <button type='submit'>
                    Find user
                </button>
            </form>
            <h2>{searchParams.get('name')}</h2>
            <h2>{searchParams.get('age')}</h2>
        </div>
    )
}

export default User
