import { useState } from "react";
import AnimalShow from "./AnimalShow";
import './App.css'

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)]
}

function App() {
    // const handleClick = () => {
    //     console.log('Button was clicked!')
    // };
    const [animals, setAnimals] = useState([])
    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={ animal } key={ index } />
    })

    return(
        <div className="app">
            <button onClick={() => 
                setAnimals([...animals, getRandomAnimal()])
            }>Add Animal</button>
            <div className="animal-list">{ renderedAnimals }</div>
        </div>
    )
}

export default App;