import React, { useState } from 'react';

export default function Person(props) {
    const [currentState, updateState] = useState({
        person: {
            name: props.name,
            age: props.age,
        }
    });

    const disappearName = () => {
        updateState({
            person: {
                name: '*******',
                age: '***',
            }
        })
    }

    return (
        <div>
            <p>I am {currentState.person.name} component and age is {currentState.person.age} || <b onClick={disappearName}>Click here</b></p>
        </div>
    )
}