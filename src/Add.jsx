import React from 'react'

const Add = (props)=>(

            <div key="addTask">
            <input type="text" onChange = {props.handleChange}></input>
            <button onClick = {props.addTask}>Add</button>
            </div>

)

export default Add

