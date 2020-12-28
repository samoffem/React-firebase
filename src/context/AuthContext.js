import React, {useContext, useState, useEffect} from 'react'
import {projectAuth} from '../firebase/config'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password){
        //creates a new user in firebase and also signs in the user upon creation
        return projectAuth.createUserWithEmailAndPassword(email, password)
    }
    function login(email, password){
        return projectAuth.signInWithEmailAndPassword(email, password)
    }

    function logout(){
        projectAuth.signOut()
    }

    useEffect(()=>{
        //triggers when a user is signed  and also returns a function that
        //can be used for unsubscribing
        const unsubscribe = projectAuth.onAuthStateChanged(user=> {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout
    }
    return (
        <AuthContext.Provider value={value}>
            {console.log(loading)}
            {!loading && children}
        </AuthContext.Provider>
    )
}

