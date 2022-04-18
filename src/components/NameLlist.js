import React from 'react'
import Person from "./Person";


function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Brian',
            age: '30',
            skill: 'React'
        },
        {
            id: 2,
            name: 'Hiwa',
            age: 29,
            skill: 'Python'
        }
    ]
    const namesList = persons.map(person => <Person key={person.id} person={person}/>)
    return (
        <div>
            {namesList}
        </div>)
}


export default NameList