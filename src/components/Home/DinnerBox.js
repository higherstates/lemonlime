import HomeButton from '../HomeButton/HomeButton'

export default function DinnerBox() {
  return (
    <section id='dinner-box'>
        <div className="dinner-box__container container flex">
          <div className='dinner-box__text'>
              <h2>Not sure what to eat for dinner?</h2>
              <p>Check out what our community have for you 💡</p>
          </div>
          <HomeButton
              to='/dinner-ideas'
              className='home__btn'
              text="Log your ideas"
          />
        </div>
    </section>
  );
}
