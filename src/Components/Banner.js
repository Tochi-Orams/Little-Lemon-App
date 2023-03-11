const Banner = (image, title, subtitle) => {
    return (
        <div className="banner"
          style={{background: `url('${image}') no-repeat`}}
        >
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    )
}

export default Banner;