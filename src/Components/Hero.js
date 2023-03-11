import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import slide1 from "../Assets/slide1.jpg"
import slide2 from "../Assets/slide2.jpg"
import slide3 from "../Assets/slide3.jpg"

const content = [
    {
        title: "Little Lemon",
        subtitle: "Chicago",
        content: "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist",
        button: "Learn More",
        image: `${slide1}`,
        class: "slide slide_1",
        wrapper_class: "one",
        direct: "/"
    },
    {
        title: "Happy and Healthy at Home!",
        subtitle: "",
        content: "All items on our menu are available for pickup or delivery",
        button: "Order Online",
        image: `${slide2}`,
        class: "slide slide_2",
        wrapper_class: "two",
        direct: "/"
    },
    {
        title: "Skip the Queue",
        subtitle: "",
        content: "Why wait to be seated when you can reserve a table in advance?",
        button: "Reserve a Table",
        image: `${slide3}`,
        class: "slide slide_3",
        wrapper_class: "three",
        direct: "/"
    }
]

const Hero = () => {
    return (
        <Slider autoplay={5000} duration={2000}>
            {content.map((article, index) => (
                <div className={article.wrapper_class}
                    key={index}
                    style={{background: `url('${article.image}') no-repeat 0% 70%`}}
                >
                    <div className={article.class}>
                        <h1>{article.title}</h1>
                        <h2>{article.subtitle}</h2>
                        <h3>{article.content}</h3>
                        <a href={article.direct}>
                            <button className="lgButton">{article.button}</button>
                        </a>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default Hero;