import './Home.css'
import Carousel from '../Carousel/Carousel'
import AboutBox from './AboutBox'
import BlogBox from './BlogBox'
import DinnerBox from './DinnerBox'
import Subscribe from '../Subscribe/Subscribe'


export default function Home() {
    return (
        <section className="home">
            <Carousel />
            <AboutBox />
            <BlogBox />
            <DinnerBox />
            <Subscribe />
        </section>
    )
}
