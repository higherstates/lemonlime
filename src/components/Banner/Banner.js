import './Banner.css'

export default function Banner(props) {
    return (
        <div className="banner">
            <div className="container">
                <h1 className="banner__title">{props.bannerTitle}</h1>
                <p className="banner__subtitle">{props.bannerSubtitle}</p>
            </div>
        </div>
    )
}