import Hero from "./Hero.js";
import Specials from "./Specials.js";
import Testimonials from "./Testimonials.js";
import Overview from "./Overview.js"

const Home = ({setPage}) => {
    return (
        <main>
            <Hero setPage={setPage} />
            <Specials setPage={setPage} />
            <Testimonials />
            <Overview />
        </main>
    )
}

export default Home;