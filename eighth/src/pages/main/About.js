function About({text}){
    return (
        <div className="wrap">
            <h2>{text.title}</h2>
            <p>{text.description}</p>
        </div>
    )
}

export default About;