import './Post/Post.css'
import Banner from './Banner/Banner'
import Post from './Post/Post'
const data = require('../helpers/PostData.json')


export default function Blog() {
    return (
        <section className="blog">
            <Banner
                bannerSubtitle="Tap into the greater energy from these wonderful experiences, the excitement and journey of thriving souls."
                bannerTitle="Welcome to the blog - where stories are told"
            />
            {data.map((val, key) => {
                return (
                    <Post key={key} imageWebp={val.imageWebp} imageJpg={val.imageJpg} title={val.title} tags={val.tags} date={val.date} content={val.content} />
                )
            })}
        </section>
    )
}