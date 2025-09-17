export function Projects({projects}) {    
    return (
        <ul className="projects">
            {projects && projects.map((project, index) =>
                <li className="project" key={index}>
                    <Project img={project.img}
                            alt={project.alt}
                            title={project.title}
                            desc={project.description}/>
                </li>
            )}
        </ul>
    );
}

export function Project({img, alt, title, desc}) {
    return (
        <>
            <img src={img} alt={alt} className="project-img" />
            <div className="project-metadata">
                <h3 className="project-metadata-title">{title}</h3>
                <p>{desc}</p>
            </div>
        </>
    );
}