import React from 'react'


// function Greet() {
//     return <h1>Hello Hiwa</h1>
// }

const Greet = ({name, heroName}) => {
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
        </div>
    )
}

export default Greet