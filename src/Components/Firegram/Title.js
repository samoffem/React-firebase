import React from 'react'
import {useAuth} from '../../context/AuthContext'
import {useHistory} from 'react-router-dom'

const Title = () => {
    const {currentUser, logout} = useAuth()
    const history = useHistory()
    console.log(currentUser.email)

    async function handleLogout(){
        await logout();
        history.push('/login')
    }
    return (
        <div className="title">
            <h1>Firegram</h1><span><button onClick={handleLogout}>Logout</button></span>
            <p>Welcome {currentUser.email}</p>
            <h2>Your Pictures</h2>
            <p>Lorem Ipsum blah blha, adispytu connectisur adit</p>
        </div>
    )
}

export default Title
