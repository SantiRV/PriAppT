import React from 'react';
import { useState } from 'react';
import { User } from '../types'; //Aca importamos el tipo User de types.ts

interface FormState {
    inputValue: User; //Aca le decimos que el inputValues va a ser de tipo User en vez de pasarle los tipos de cada uno de los valores
    //name: string;
    //age: number;
    //avatar: string;
    //description: string;    
};

interface FormProps { 
    onNewUser: React.Dispatch<React.SetStateAction<User[]>>; //Aca le decimos que onNewUser va a ser una funcion que recibe un array de objetos de tipo User
};



const Form = ({onNewUser}: FormProps) => {
    const [inputValue, setInput] = useState<FormState["inputValue"]>({
        name: '',
        age: 0,
        avatar: '',
        description: ''
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onNewUser((user) => [...user, inputValue]);
    } //Aca le decimos que el evento va a ser de tipo FormEvent

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { //Aca le decimos los tipos que necesitamos que sea el evento
        setInput({
            ...inputValue,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputValue.name} name='name' type="text" placeholder='Name' />
                <input onChange={handleChange} value={inputValue.age} name='age' type="number" placeholder='age'/>
                <input onChange={handleChange} value={inputValue.avatar} name='avatar' type="url" placeholder='avatar'/>
                <textarea onChange={handleChange} value={inputValue.description} name='description'  placeholder='description'/>
                <button type="submit">Save new user</button>
            </form>
        </div>
    ); 
};

export default Form;    