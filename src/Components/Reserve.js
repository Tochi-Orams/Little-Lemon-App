import Banner from "../Components/Banner.js";

const banner = {
    heading: "Reserve a Table",
    subHeading: "Skip the wait and get seated immediately by booking in advance",
    getImageSrc: () => require("../Assets/slide3.jpg"),
}


const Reserve = () => {
    return (
        <main>
            <Banner
                title={banner.heading}
                subtitle={banner.subHeading}
                image={banner.getImageSrc()}
            />
            
        </main>
    )
}