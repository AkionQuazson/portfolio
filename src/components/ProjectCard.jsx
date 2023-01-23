import "../css/projectCard.css"

export const ProjectCard = (props) => {
    
    const {name, link, icon, technologies, description} = props.project
    
    const dispTechs = (tech) => {
        const techList = tech.map((tek, i) => {
            return <li key={i}>{tek}</li>
        })
        return techList;
    }

    const dispDescription = (desc) => {
        const paragraphs = desc.map((par, i) => {
            return <p key={i}>{par}</p>
        })
        return paragraphs; 
    }
    
    return <div className="card">
        <h3>{name}</h3>
        <a href={link}>
            <img src={icon} alt={name}/>
        </a>
        <ul>
            {dispTechs(technologies)}
        </ul>
        {dispDescription(description)}
    </div>
};

export default ProjectCard;