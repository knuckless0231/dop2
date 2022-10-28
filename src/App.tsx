import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./Components/Button";


type ShowType = {
    userId: number
    id: number
    title: string
    completed: boolean
}


function App() {

    const [show, setShow] = useState<ShowType[]>([])


    const showApp = () => {

        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setShow(json))

    }

    const clean = ()=>{
        setShow([])
    }

    // const filter = ()=>{
    //
    // }

    return (
        <div className="App">
            <Button name={'Show me'} callback={showApp}/>
            <Button name={'Hide Me'} callback={clean}/>
            {/*<Button name={'Filter'} callback={filter}/>*/}

            <ul>
                {show.map((e) => {
                    return (
                        <li key={e.id}>
                            <span>{e.userId}</span>
                            <span>{e.id}</span>
                            <span>{e.title}</span>
                            <span> {`${e.completed}`}</span>
                        </li>
                    );
                })}

            </ul>

        </div>
    );
}

export default App;
