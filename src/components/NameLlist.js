import React from 'react'


function NameList() {
    const names = ['bruce', 'clark', 'diana']
    const namesList = names.map(name => <h2>{name}</h2>)
    return (
        <div>
            {namesList}
        </div>)
}


export default NameList