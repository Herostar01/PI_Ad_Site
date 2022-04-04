import React from 'react'
import '../App.css'
import { Form, Row, Col, Button } from 'react-bootstrap'

const InjuryHelp = () => {

    
    
    return (
    
    <div>
        
        <h1 className='gold'>
        Rana Law Office
        </h1>

        <h1 className='redWhite'>
            Auto Accident & Injury Help
        </h1>
        <h1 className='redWhite'>
            Get a Free Case Evaluation
        </h1>
        <h2>
            100's of people are injured in accidents every day and 
            MOST HAVE SERIOUS INJURIES THAT DESERVE COMPENSATION.
        </h2>
        <br />
        <h2>
            Insurance companies know this and try to settle a claim quickly for as little as possible by employing their own legal experts. This is why you need the best Injury Attorney on your side is essential for all accident cases today.
        </h2> <br />
        <h1 className='large'>
            You May be Entitled to Maximum Compensation. Take this 60 second qualification and find out:
        </h1>

        <FormContainer>
        <h1> Sign Up </h1>
        

        <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
                <Form.Label> Name  </Form.Label>
                <Form.Control 
                    type='name' 
                    placeholder='Enter Name'
                    value={name}
                    onChange= {(e) => setName(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                >
                </Form.Control> 
            </Form.Group>

            <Form.Group controlId='password'>
                <Form.Label> Password  </Form.Label>
                <Form.Control 
                    type='password' 
                    placeholder='Enter password'
                    value={password}
                    onChange= {(e) => setPassword(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group controlId='confirmPassword'>
                <Form.Label> Confirm Password  </Form.Label>
                <Form.Control 
                    type='password' 
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange= {(e) => setConfirmPassword(e.target.value)}></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary' className='m-3'>
                Register
            </Button>

        </Form>

        <Row className='py-3' >
            <Col>
                Have an Account? 
                
            </Col>

        </Row>
    </FormContainer> 
        
    </div>

    )
}

export default InjuryHelp