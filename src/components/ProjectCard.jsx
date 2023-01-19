

export const ProjectCard = (props) => {
    
    const {name, link, icon, technologies, description} = props.project
    return <div>
        <h3>{name}</h3>
        <p>{description}</p>
    </div>
};

export default ProjectCard;