import React, { useState } from "react"
import Axios from "axios"
import './Contact.css'



export default function Contact(props) {

    const [visitorName, setVisitorName] = useState('')
    const [visitorEmail, setVisitorEmail] = useState('')
    const [message, setMessage] = useState('')


    //  Write message to db:
    const submitMessage = (event) => {
        event.preventDefault()
        Axios.post(
            "https://lemonlime-project.herokuapp.com/submit",
            {
                visitorName: visitorName,
                visitorEmail: visitorEmail,
                message: message
            }
        )
        .then((response) => {
            alert(`We have received your message.\nThank you & have a lovely day :)`)
            setVisitorName('')
            setVisitorEmail('')
            setMessage('')
        })
        .catch((err) => {
            alert(`There was an ${err}. Please try again.`)
            console.log(err)
        })
    }

    return (
        <section className="contact">
            <div className="contact__container container flex">
                <div className="contact__text">
                    <h2 className="contact__text--title">{props.title}</h2>
                    <p className="contact__text--subtitle">{props.subtitle}</p>
                </div>
                <form
                    onSubmit ={submitMessage}
                    className="contact__form"
                >
                    <input
                        type='text'
                        value={visitorName}
                        name="visitor-name"
                        placeholder="Your Name"
                        autoComplete="off"
                        onChange={(event) => {setVisitorName(event.target.value)}}
                        className="contact__form-control contact__form-email"
                        required
                    />
                    <input
                        type='email'
                        value={visitorEmail}
                        name="visitor-email"
                        placeholder="Email Address"
                        autoComplete="off"
                        onChange={(event) => {setVisitorEmail(event.target.value)}}
                        className="contact__form-control contact__form-email"
                        required
                    />
                    <textarea
                        cols="15"
                        rows="6"
                        value={message}
                        name="visitor-message"
                        placeholder="Message"
                        onChange={(event) => {setMessage(event.target.value)}}
                        className="contact__form-control contact__form-message"
                        required
                    >
                    </textarea>
                    <button
                        type="submit"
                        className="contact__form-btn"
                    >
                        SUBMIT
                    </button>
                </form>
            </div>
        </section>
    )
}