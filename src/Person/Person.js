import React, { Component } from 'react';

export default function Person(props) {
    return (
        <div>
            <p>I am {props.name} component and salary is {props.salary} {props.children}</p>
        </div>
    )
}