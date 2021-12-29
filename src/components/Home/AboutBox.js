import React from 'react';
import HomeButton from '../HomeButton/HomeButton'
import About1Png from '../../images/about-1.png'
import About1Webp from '../../images/about-1.webp'

export default function AboutBox() {
  return (
    <section id='about-box'>
            <div className="about-box__container container flex">
                <div className="about-box__text flex">
                    <h3>Welcome to</h3>
                    <h2>
                        Lemonlime
                    </h2>
                    <blockquote>
                        <q>
                            As long as you fight to win, you don’t lose. By pushing on, you learn the path to success. Getting back up from falling down and trudging on toward success is being a winner.
                        </q>
                        <footer>Samvara</footer>
                    </blockquote>
                    <HomeButton
                        to="/about"
                        text="About Us"
                    />
                </div>
                <picture className="about-box__img flex">
                    <source srcSet={About1Webp} type="image/webp" />
                    <source srcSet={About1Png} type="image/png" />
                    <img src={About1Png} alt="Decorative images" />
                </picture>
            </div>
    </section>
  );
}
