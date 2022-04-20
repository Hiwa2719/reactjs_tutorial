import React from 'react'


const UserContext = React.createContext('Coding is fun')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}
