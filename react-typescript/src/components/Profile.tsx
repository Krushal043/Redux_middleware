import React from 'react'

type Profileprops = {
    name: string;
    age: number;
    status?: 'Single'| 'Half Marride' | 'Dukhi manus'
}

const Profile = (props:Profileprops) => {
    return (
        <div style={{border: '2px solid',margin: '5px'}}>
            Name = {props.name}
            <br/>
            Age = {props.age}
            <br/>
            Status = {props.status || "Khus manus"}
        </div>
    )
}

export default Profile
