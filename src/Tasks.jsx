import React, {Component} from 'react'
import render from 'react-dom'

const Tasks = (props)=>(
    <ul key="tasks">
    {props.arr.map((item,i)=>{
        return <li key={i}>{item}</li>
    })}
    </ul>
);


export default Tasks