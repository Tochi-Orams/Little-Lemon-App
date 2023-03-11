import Hero from "../Components/Hero.js";
import Specials from "../Components/Specials.js";
import Testimonials from "./Testimonials.js";
import Overview from "./Overview.js"

const Main = () => {
    return (
        <main>
            <Hero />
            <Specials />
            <Testimonials />
            <Overview />
        </main>
    )
}

export default Main;