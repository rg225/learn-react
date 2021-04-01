import React, { useState } from 'react';

let visible = true;
export default function Person(props) {
    let person = {
        name: props.name,
        age: props.age,
    };
    let personNoDetails = {
        name: '*******',
        age: '***',
    }

    const [currentState, updateState] = useState({
        person: person
    });

    const [visiblityState, updateVisiblityState] = useState({
        visiblity: 'Hide Details'
    });

    const changeVisiblity = () => {
        if(visible){
            updateState({
                person: personNoDetails 
            })
            updateVisiblityState({
                visiblity: 'Show Details'
            })
        } else {
            updateState({
                person: person 
            })
            updateVisiblityState({
                visiblity: 'Hide Details'
            })
        }
        visible = !(visible);
    }

    return (
        <div>
            <p>I am {currentState.person.name} component and age is {currentState.person.age} || <b onClick={changeVisiblity}>{visiblityState.visiblity}</b></p>
        </div>
    )
}