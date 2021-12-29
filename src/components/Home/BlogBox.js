import Blog1Jpg from '../../images/blog-1.jpeg'
import Blog1Webp from '../../images/blog-1.webp'
import Blog2Jpg from '../../images/blog-2.jpeg'
import Blog2Webp from '../../images/blog-2.webp'
import Blog3Jpg from '../../images/blog-3.jpeg'
import Blog3Webp from '../../images/blog-3.webp'
import HomeButton from '../HomeButton/HomeButton'

export default function BlogBox() {
  return (
    <section id='blog-box'>
        <div className="blog-box__container container flex">
            <div className='blog-box__images flex'>
                <picture className='blog-box__img'>
                    <source srcSet={Blog1Webp} type="image/webp" />
                    <source srcSet={Blog1Jpg} type="image/jpeg" />
                    <img src={Blog1Jpg} alt="A book and a water bottle" />
                </picture>
                <picture className='blog-box__img'>
                    <source srcSet={Blog2Webp} type="image/webp" />
                    <source srcSet={Blog2Jpg} type="image/jpeg" />
                    <img src={Blog2Jpg} alt="Woman hiking" />
                </picture>
                <picture className='blog-box__img'>
                    <source srcSet={Blog3Webp} type="image/webp" />
                    <source srcSet={Blog3Jpg} type="image/jpeg" />
                    <img src={Blog3Jpg} alt="A white flower" />
                </picture>
            </div>
            <div  className='blog-box__text'>
                <h2 className='blog-box__text--h2'>
                    Enjoy the journey wherever it may take you
                </h2>
                <blockquote>
                    <q>Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.</q>
                    <footer>
                        Lao Tzu
                    </footer>
                </blockquote>
            </div>
            <HomeButton
                to="/blog"
                text="Read The Blog"
            />
        </div>
    </section>
  );
}
