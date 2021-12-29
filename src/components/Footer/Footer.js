import './Footer.css'
import { BsFacebook } from 'react-icons/bs'
import { BsPinterest } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

export default function Footer() {
    return (
        <footer className="footer flex">
            <div className="footer__social flex">
                <p>Follow us on</p> 
                <a 
                    className="footer__links" 
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsFacebook />
                </a>
                <a 
                    className="footer__links"
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsInstagram />
                </a>
                <a 
                    className="footer__links"
                    href="https://www.pinterest.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsPinterest />
                </a>
                <a 
                    className="footer__links" 
                    href="https://www.twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsTwitter />
                </a>
            </div>
            <small>
                Powered by Light &copy; 2021
            </small>
        </footer>
    )
}