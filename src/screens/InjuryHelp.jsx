import React from 'react'
import { useState, useEfect } from 'react'
import '../App.css'
import FormContainer from '../components/FormContainer'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const InjuryHelp = (props) => {
    const navigate = useNavigate

    const [one, setOne] = useState("");
    const [two, setTwo] = useState("");
    const [three, setThree] = useState("");
    const [four, setFour] = useState("")
    const [five, setFive] = useState("");

    const [six, setSix] = useState("");
    const [seven, setSeven] = useState("");
    const [eight, setEight] = useState("");
    const [nine, setNine] = useState("");
    const [ten, setTen] = useState("");


    const [errors, setErrors] = useState([]);
    const [dbErrors, setDBErrors] = useState([]);

    const createProspect = (e) => {
        e.preventDefault();
        console.log("Prospect Data Saved")

        const newProspect = {
            one: one,
            two,
            three,
            four,
            five,
            six,
            seven,
            eight,
            nine,
            ten
        }

        axios.post("http://localhost:8000/api/prospects", newProspect)
            .then(res => {
                console.log(res.data);
                console.log("success adding a Prospect!!");
                navigate("/next")
            })
            .catch(err => {
                console.log("ERROR ❌ Couldn't Ad Pet!");
                console.log("?????", err.response.data.error.errors);

                // handle Errors - another way
                const {errors} = err.response.data.error;
                const messages = Object.keys(errors).map( error => errors[error].message )
                console.log(messages);
                setDBErrors(messages);

            })
    }

    
    
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

        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px"}}>  
            <h1> Pet Shelter </h1>
            <Link to={'/'}> Return Home </Link>
            </div>

            

            {/* {
                errors.map((err, index) => <p key={index} style={{color: "red"}}>{err}</p>)
            } */}
            {
                dbErrors.map((err, index) => <p key={index} style={{color: "red"}}>{err}</p>)
            }

            <form onSubmit={createPet}>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px" , border: "2px solid black" }} >

                <div style={{  alignItems: "center" }}>
                Pet Name:
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} /><br />
                Pet Type:
                <input type="text" onChange={(e) => setType(e.target.value)} value={type} /><br />
                Pet Description:
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} /><br />
                <br />

                <button style={{backgroundColor: "blue", color: "white" }} >Add Pet</button>

                </div>

                <div> <div>Skills (optional):</div>
                Skill 1:
                <input type="text" onChange={(e) => setSkillOne(e.target.value)} value={skillOne} /><br />
                Skill 2:
                <input type="text" onChange={(e) => setSkillTwo(e.target.value)} value={skillTwo} /><br />
                Skill 3:
                <input type="text" onChange={(e) => setSkillThree(e.target.value)} value={skillThree} /><br />
                <br />
                </div>



                </div>
                
            </form>
        
    </div>

    )
}

export default InjuryHelp