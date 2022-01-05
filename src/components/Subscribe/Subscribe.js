import React, { useState } from "react"
import Axios from "axios"
import './Subscribe.css'
import { ErrorMessage, SuccessMessage } from '../../helpers/DisplayMessages'



export default function Subscribe() {

    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [errorMessage, setErrorMessage] = useState(false)
    const [successMessage, setSuccessMessage] = useState(false)

    
    //  Write to db:
    const subscribeEmail = (event) => {
        event.preventDefault()
        Axios.post(
            "https://lemonlime-project.herokuapp.com/subscribe",
            {
                firstName: firstName,
                lastName: lastName,
                email: email
            }
        )
        .then((response) => {
            if (response.status === 200) {
                setSuccessMessage(true)
                setErrorMessage(false)
                setFirstName('')
                setLastName('')
                setEmail('')
            }
        })
        .catch((err) => {
            if (err.response.status !== 200) {
                setErrorMessage(true)
                setSuccessMessage(false)
            }
            console.log(err)
        })
    }


    return (
        <section className="subscribe">
            <div className="subscribe__container container flex">
                <div className="subscribe__text">
                    <h2>Postcards from the road</h2>
                    <p>Join 10,000+ people and receive monthly refreshing experiences and stunning photography to inspire your wanderlust — Straight to your inbox</p>
                </div>
                <form
                    onSubmit ={subscribeEmail}
                    className="subscribe__form flex"
                    netlify
                >
                    <input
                        type="text"
                        value={firstName}
                        name="subscriber-fname"
                        placeholder="First Name"
                        size={18}
                        onChange={(event) => {setFirstName(event.target.value)}}
                        required
                    />
                    <input
                        type="text"
                        value={lastName}
                        name="subscriber-lname"
                        placeholder="Last Name"
                        size={18}
                        onChange={(event) => {setLastName(event.target.value)}}
                        required
                    />
                    <input
                        type='email'
                        value={email}
                        name="subscriber-email"
                        placeholder="Email Address"
                        size={18}
                        onChange={(event) => {setEmail(event.target.value)}}
                        required
                    />
                    <button
                        type="submit"
                        className="subscribe__btn"
                        >
                        SUBSCRIBE
                    </button>
                </form>
                {errorMessage && <ErrorMessage text="* This email has already subscribed. Please try another email." />}
                {successMessage && <SuccessMessage text="Thank you for subscribing!" />}
            </div>
        </section>
    )
}