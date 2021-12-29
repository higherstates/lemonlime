import React from 'react';
import './About.css'
import Contact from '../Contact/Contact';

function About() {
  return (
    <section id='about'>
      <div className='about__bg'>
        <div className='about__text'>
          <h1 className='about__text--h1'>About Us</h1>
          <p>Lemonlime is a website dedicated for sharing beautiful experiences of Mary & Mark . We're working to bring positive energy from our life journey as a gift to the World.</p>
          <p>Everyone of us goes through life, which means we’ve experienced good things as well as bad things. We all grow old.</p>
          <p>But we can only gain wisdom, maturity and true growth by consciously learning from those experiences, by asking ourselves “What did I learn from that experience?” and finding the answers for ourselves. That’s how we get better overtime.</p>
        </div>
      </div>
      <Contact
        title="Contact"
        subtitle="Leave Us A Message"
      />
    </section>
  );
}

export default About;
