import React, {useRef, useState} from 'react'
import {Card, Form, Button, Alert} from 'react-bootstrap'
import {useAuth} from '../../context/AuthContext'
import {Link, useHistory} from 'react-router-dom'

const Signup = () => {
    const emailref = useRef()
    const passwordref = useRef()
    const passwordConfirmref = useRef()
    const {signup} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
  

    async function handleSubmit(e){
        e.preventDefault()

        if(passwordref.current.value !== passwordConfirmref.current.value){
            return setError("Passwords do not match")
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailref.current.value, passwordref.current.value)
            history.push('/')
        } catch(err){
            console.log(err)
            setError(err.message)
        }
        setLoading(false)
        
    }
    return (
        
            <div className="signup-container">
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Sign Up</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailref} required></Form.Control>
                            </Form.Group>

                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordref} required></Form.Control>
                            </Form.Group>

                            <Form.Group id="password-confirm">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" ref={passwordConfirmref} required></Form.Control>
                            </Form.Group>

                            <Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2">
                    Already have an account? <Link to="login">Log in</Link>
                </div>
            </div>
      
    )
}

export default Signup
