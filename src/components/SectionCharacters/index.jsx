import { useEffect, useState } from 'react'
import axios from 'axios';
import { Card } from '../Card'
import './style.css'

export const SectionCharacters = () => {

    const [characters, setCharacters] = useState([])
    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then(res => {
                console.log(res.data.results)
                setCharacters(res.data.results)
            })
    }, [])

    return (
        <section className="section-characters">
            <h2>Nossos <span>Personagens</span></h2>

            <div className="container-cards-characters">
                {characters.map((char) => (
                    <Card 
                        image={char.image} 
                        name={char.name} 
                        specie={char.species} 
                        status={char.status} 
                        location={char.origin?.name}/>   
                    ))}

            </div>
        </section>
    )
}