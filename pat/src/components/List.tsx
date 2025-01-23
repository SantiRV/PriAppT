import React from 'react';
import {User} from '../types';

interface Props {
    users: Array<User>; // Array<{name: string, age: number, avatar: string, description?: string 
    // Aqui aprovechamos para decirle que el tipo de users va a ser un array de objetos con las propiedades name, age, avatar y description
    
}
export default function List({ users }: Props) { 
    return (
        <div className='List'>
        <h1>Users</h1>
        <ul >
            {users.map((user, index) => (
            <li key={index} >
                <img src={user.avatar} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.age} years old</p>
                <p>{user.description?.toUpperCase()}</p>
            </li>      
            ))}
        </ul>
       </div>
    );
};